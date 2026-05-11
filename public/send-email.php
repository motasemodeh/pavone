<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $to = "pavonedistribution@gmail.com";
    $subject = isset($data['subject']) ? $data['subject'] : "New Form Submission from Pavone Website";
    
    $message = "New submission details:\n\n";
    foreach ($data as $key => $value) {
        if ($key != 'subject') {
            $message .= ucfirst($key) . ": " . $value . "\n";
        }
    }
    
    $headers = "From: webmaster@pavonedistribution.com\r\n";
    $headers .= "Reply-To: " . (isset($data['email']) ? $data['email'] : $to) . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mail function failed"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
