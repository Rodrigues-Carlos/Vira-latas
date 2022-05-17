<?php

session_start();

	require "config.php";

	$caminho = "envia-email.php";

	$nome = $_POST["nome"] ?? "";
	$email = $_POST["email"] ?? "";
	$cpf = $_POST["cpf"] ?? "";
	$senha = $_POST["senha_hash"] ?? "";
	$geraCodigo = rand(1,1000);
	$_SESSION['codigo'] = $geraCodigo;

	$existente = mysqli_query($conexao, "SELECT COUNT(*) AS Total FROM usuario WHERE usuario='".$usuario."'");
	$row = mysqli_fetch_array($existente);
	$count = $row['Total'];

	//Validação para não repetir cadastros iguais
	if($count > 0){
        $_SESSION['email'] = $usuario;
		echo "email ja existe";
    }else{
		
		if(is_numeric($cpf)){
			$resultado = mysqli_query($conexao, "INSERT INTO usuario (usuario, nome, email, cpf, senha, codigo) VALUES ('$usuario', '$nome', '$email','$cpf','$senha', '$geraCodigo')");

		//$retorno["status"] = "n";
		$retorno["funcao"] = "cadastro";

		$retorno["status"] = "s";
		$retorno["mensagem"] = "usuario cadastrado";

		echo json_encode($retorno);
		} else {
			echo "Campos incorretos";
		}
        
    }
?>