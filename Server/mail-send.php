<?php

    $email = addslashes($_POST['email']);
    
    $destino = "geanv7820@gmail.com";
    $assunto = "Novo Lead - Main site";
    //$corpo = "Nome: ".$nome."\nE-mail: ".$email."\nTelefone: ".$telefone."\nEmpresa: ".$empresa;
    $corpo = "
		<html><body>
	    <div style='background:#000; padding: 20px'>
		    <div style='background:#F4F4F4; padding: 20px; font-family: arial; font-size: 16px; width:200px; margin:auto'>
					<strong>E-mail: </strong>
					{$email}
					<br>
				</div>
			</div>
		</html></body>
    ";

    $cabecalho = "From: geanv7820@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Maieler:PHP/".phpversion();
	$cabecalho .= 'MIME-Version: 1.0' . "\r\n";
    $cabecalho .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    if(mail($destino,$assunto,$corpo,$cabecalho)){
        header('Location: obrigado.html');
    }else{
        echo("Houve um erro ao enviar o e-mail, pedimos desculpa!");
    }


?>