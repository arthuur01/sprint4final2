function buscarPartidas() {
    var regiao = document.getElementById("regiao").value;

    // Enviar a solicitação para o arquivo PHP
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "buscar_partidas.php?regiao=" + encodeURIComponent(regiao), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var partidas = JSON.parse(xhr.responseText);

            // Limpar o conteúdo anterior
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "";

            // Exibir as partidas encontradas
            for (var i = 0; i < partidas.length; i++) {
                var partida = partidas[i];

                var divPartida = document.createElement("div");
                divPartida.innerHTML = "Time Desafiante: " + partida.time_des + "<br>" +
                                       "Local: " + partida.local + "<br>" +
                                       "Data: " + partida.data + "<br>" +
                                       "Hora: " + partida.hora + "<br>" +
                                       "Quem trar&aacute; a bola: " + partida.bola  + 
                                       "<br>----------------------------------------------";

                resultadoDiv.appendChild(divPartida);
            }
        }
    };
    xhr.send();
}
