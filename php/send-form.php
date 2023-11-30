<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone-nr"]);
    $theme = htmlspecialchars($_POST["theme"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "jasmin.huk@gmail.com";
    $contact = "Proszę o kontakt za numerem $phone";
    $headers = "Od: ".$email;

    if (empty($name)){
        exit();
        header("Location: ../kontakt.html");
    } else if (empty($email)) {
        exit();
        header("Location: ../kontakt.html");
    } else if (empty($phone)) {
        exit();
        header("Location: ../kontakt.html");
    } else if (empty($message)) {
        exit();
        header("Location: ../kontakt.html");
    }

    mail($to, $message, "From: $email\r\n" . "Reply-To: $email\r\n" . $contact);
    header("Location: ../kontakt.html");
} else {
    header("Location: ../kontakt.html");
}
?>

