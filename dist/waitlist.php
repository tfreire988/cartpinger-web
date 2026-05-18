<?php
/**
 * CartPinger — Waitlist endpoint
 * POST /waitlist.php  { "email": "user@example.com" }
 *
 * Stores subscribers in waitlist.json (one entry per line, newline-delimited JSON).
 * Returns JSON: { "ok": true } or { "ok": false, "error": "..." }
 *
 * Requirements: PHP 8.1+, write permission on the directory.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Parse body (JSON or form-encoded) ---
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if ($data === null) {
    // Fallback: application/x-www-form-urlencoded
    $data = $_POST;
}

$email = trim((string) ($data['email'] ?? ''));

// --- Validate ---
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Email inválido']);
    exit;
}

// Normalise to lowercase
$email = strtolower($email);

// Hard cap — stop storing after 500 entries (safety net)
$storePath = __DIR__ . '/waitlist.json';

$entries = [];
if (file_exists($storePath)) {
    $lines = file($storePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines !== false) {
        foreach ($lines as $line) {
            $entry = json_decode($line, true);
            if (is_array($entry)) {
                $entries[] = $entry;
            }
        }
    }
}

if (count($entries) >= 500) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'error' => 'Lista completa']);
    exit;
}

// Idempotent — already subscribed is still a success
foreach ($entries as $e) {
    if (($e['email'] ?? '') === $email) {
        echo json_encode(['ok' => true, 'duplicate' => true]);
        exit;
    }
}

// --- Store ---
$record = [
    'email'    => $email,
    'ip'       => $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '',
    'ua'       => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 200),
    'ts'       => date('c'), // ISO 8601
];

$written = file_put_contents(
    $storePath,
    json_encode($record) . "\n",
    FILE_APPEND | LOCK_EX
);

if ($written === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No se pudo guardar']);
    exit;
}

// --- Email notification via Resend ---
$resendKey  = getenv('RESEND_API_KEY') ?: '';
$notifyTo   = getenv('NOTIFY_EMAIL')   ?: '';

if ($resendKey !== '' && $notifyTo !== '') {
    $payload = json_encode([
        'from'    => 'CartPinger Waitlist <waitlist@cartpinger.com>',
        'to'      => [$notifyTo],
        'subject' => "Nueva suscripción waitlist: {$email}",
        'text'    => "Alguien se ha suscrito al waitlist de CartPinger.\n\nEmail: {$email}\nFecha: {$record['ts']}\n\nTotal suscriptores: " . (count($entries) + 1),
    ]);
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . $resendKey,
            'Content-Type: application/json',
        ],
        CURLOPT_TIMEOUT        => 5,
    ]);
    curl_exec($ch);
    curl_close($ch);
}

echo json_encode(['ok' => true]);
