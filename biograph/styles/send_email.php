<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Contact-Name'];
    $email = $_POST['Contact-Email'];
    $message = $_POST['Contact-Message'];

    $to = "massango23@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Email successfully sent!";
    } else {
        echo "Email sending failed.";
    }
}
?>
