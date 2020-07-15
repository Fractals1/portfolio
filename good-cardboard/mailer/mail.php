<?php
$phone = $_POST['user_phone'];

$to = "technology2000@mail.ru";
$subject = "зпрос обратного звонка $phone";
$message = "оставили номер телефона $phone ";
$headers = "From: order@ironforme.ru";
if (mail($to, $subject, $message, $headers, 'order@ironforme.ru')) {

echo "Mail sent";
} else {
echo "Mail not sent";
}
?>