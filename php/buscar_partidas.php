<?php
$regiao = $_GET["regiao"];

// Carregar o conteúdo do arquivo JSON
$jsonData = file_get_contents("partidas.json");
$partidas = json_decode($jsonData, true);

$resultado = array();

// Filtrar as partidas pela região
foreach ($partidas as $partida) {
    if ($partida["regiao"] === $regiao) {
        $resultado[] = $partida;
    }
}

// Retornar o resultado como JSON
header("Content-Type: application/json");
echo json_encode($resultado);
?>
