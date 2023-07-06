const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const email = document.getElementById('email');
  const position = document.getElementById('position');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  if (!name.value || !age.value || !email.value || !position.value || !password.value || !confirmPassword.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('As senhas não coincidem.');
    return;
  }

  // nessa parte adicionarei um código para realizar o processamento dos dados do usuário

  alert('Usuário registrado com sucesso!');
  form.reset();
});
