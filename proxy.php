<?php
$url = 'https://httpbin.org/post';
$data = file_get_contents('php://input');

$options = array(
    'http' => array(
        'method'  => 'POST',
        'content' => $data,
        'header'  => "Content-Type: application/json\r\n"
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

header('Content-Type: application/json');
echo $result;
?>