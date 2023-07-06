window.onload = function() {
  document.getElementById("cadastroForm").onsubmit = function(e) {
    e.preventDefault();
    cadastrarPartida();
  };
};

function cadastrarPartida() {
  var timeDes = document.getElementById("time_des").value;
  var regiao = document.getElementById("regiao").value;
  var local = document.getElementById("local").value;
  var data = document.getElementById("data").value;
  var hora = document.getElementById("hora").value;
  var bola = document.getElementById("bola").value;

  var partida = {
    "time_des": timeDes,
    "regiao": regiao,
    "local": local,
    "data": data,
    "hora": hora,
    "bola": bola
  };

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Partida cadastrada com sucesso!");
      document.getElementById("cadastroForm").reset();
    }
  };
  xhttp.open("POST", "salvar_partida.php", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(partida));
}
