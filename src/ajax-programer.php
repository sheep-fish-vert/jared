<?php
    $subject = 'Start now!';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['contact_name'])) {
        $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
        $mess .= '<b>First name</b>' . $name . '<br>';
    }
    
    if(isset($_POST['contact_email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['contact_email'])), 0, 100);
        $mess .= '<b>Email:</b>' . $mail . '<br>';
    }
    
    if(isset($_POST['massage'])) {
        $tel = substr(htmlspecialchars(trim($_POST['massage'])), 0, 100);
        $mess .= '<b>Massage:</b>' . $tel . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('artem.garmatyk@gmail.com','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    if(isset($_FILES['file'])) {
            if($_FILES['file']['error'] == 0){
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>