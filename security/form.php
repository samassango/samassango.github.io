<?php

$fullname; $email; $message; $emailErr; $nameErr; $messageErr;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["fullname"])) {
        $nameErr = "Name is required";
      } else {
        $fullname = test_input($_POST["fullname"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$fullname)) {
          $nameErr = "Only letters and white space allowed";
        }
      }
      
      if (empty($_POST["email"])) {
        $emailErr = "Email is required";
      } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }

      if (empty($_POST["message"])) {
        $messageErr = "Message is required";
      } else {
        $message = test_input($_POST["message"]);
       
      }
      $msg = $message;
    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);

    // send email
    mail("massango23@gmail.com",$fullname.' '.$email,$message);
    echo "Successful send.";
    header("Location: ./index.html");
    die();
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

?>