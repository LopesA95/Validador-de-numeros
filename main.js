const form = document.getElementById('my-form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function validaNumeros(input) {
  const regex = /\D/;
  return !regex.test(input);
}

function exibirMensagem(mensagem, cor) {
  const elementoMensagem = document.getElementById('message');
  elementoMensagem.innerHTML = mensagem;
  elementoMensagem.style.color = cor;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formEvalido = validaNumeros(campoA.value) && validaNumeros(campoB.value);

  if (formEvalido && Number(campoB.value) > Number(campoA.value)) {
    const mensagemSucesso = 'Formulário valido. O número B é maior que o número A.';
    exibirMensagem(mensagemSucesso, 'green');

    campoA.value = '';
    campoB.value = '';

  } else {
    const mensagemErro = 'Formulário invalido. O número B deve ser maior que o número A.';
    exibirMensagem(mensagemErro, 'red');
  }
});
