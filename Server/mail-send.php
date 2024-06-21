<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Inclua a classe PHPMailer
require 'caminho/para/PHPMailer/src/Exception.php';
require 'caminho/para/PHPMailer/src/PHPMailer.php';
require 'caminho/para/PHPMailer/src/SMTP.php';

// Verifique se o email foi enviado via POST e sanitize
$email = isset($_POST['email']) ? filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) : '';

if ($email) {
    // Configurações do servidor SMTP
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  
        $mail->SMTPAuth = true;
        $mail->Username = 'codingwithgeandev@gmail.com';
        $mail->Password = 'd:AuD!BxWj48!9H'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port = 587; 
        
        
        $mail->setFrom('codingwithgeandev@gmail.com', 'Gean Vitor');
        $mail->addAddress('codingwithgeandev@gmail.com', 'Destinatário');
        
        
        $mail->isHTML(true);
        $mail->Subject = 'Novo Lead - Main site';
        $mail->Body    = "
            <html>
            <body>
                <div style='background:#000; padding: 20px'>
                    <div style='background:#F4F4F4; padding: 20px; font-family: Arial, sans-serif; font-size: 16px; width: 200px; margin: auto'>
                        <strong>E-mail: </strong> {$email} <br>
                    </div>
                </div>
            </body>
            </html>
        ";

        $mail->send();
        exit;
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
    }
} else {
    echo "E-mail inválido ou não fornecido!";
}
?>
