<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новое обращение Universal";

if(isset($email)){
    $body = "
    <h2>Адрес для рассылки</h2>
    <b>email:</b><br>$email
    ";
} else if (isset($message)) {
    $body = "
    <h2>Новое сообщение</h2>
    <b>Сообщение:</b><br>$message
    ";
}
   

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'kuznecovm489@gmail.com'; // Логин на почте
    $mail->Password   = '**********'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('kuznecovm489@gmail.com', 'Максим Кузнецов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nardo1988@mail.ru');  


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    
    // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);


    if(isset($email)){
        header('Location: thankyou.html');
    } else if (isset($message)) {
        header('Location: message.html');
    }
  
    
