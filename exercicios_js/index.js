function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Verifica se o número é divisível por qualquer número de 2 até a raiz quadrada do próprio número
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function checkNumber() {
    const userInput = document.getElementById("userInput").value;
    const resultElement = document.getElementById("resultado-primo");

    if (userInput.trim() === "") {
        resultElement.textContent = "Por favor, insira um número.";
        return;
    }

    const number = parseInt(userInput);

    if (isNaN(number)) {
        resultElement.textContent = "Por favor, insira um número válido.";
    } else if (isPrime(number)) {
        resultElement.textContent = number + " é um número primo.";
    } else {
        resultElement.textContent = number + " não é um número primo.";
    }
}

function restrictInput(event) {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    const allowedCharacters = /[0-9]/;

    if (!allowedKeys.includes(event.key) && !allowedCharacters.test(event.key)) {
        event.preventDefault();
    }
}

function saoAnagramas(palavra1, palavra2) {
    palavra1 = palavra1.toLowerCase().replace(/\s/g, '');
    palavra2 = palavra2.toLowerCase().replace(/\s/g, '');

    let arr1 = palavra1.split('').sort();
    let arr2 = palavra2.split('').sort();

    return arr1.join('') === arr2.join('');
}

function verificarAnagrama() {
    let palavraA = document.getElementById('palavraA').value;
    let palavraB = document.getElementById('palavraB').value;
    let resultado = document.getElementById('resultado-anagramas');

    // Verifica se as palavras contêm apenas letras
    let letrasA = /^[A-Za-z]+$/;
    let letrasB = /^[A-Za-z]+$/;
    if (!letrasA.test(palavraA) || !letrasB.test(palavraB)) {
        resultado.textContent = 'Por favor, insira apenas letras.';
        return;
    }

    if (saoAnagramas(palavraA, palavraB)) {
        resultado.textContent = 'As palavras são anagramas.';
    } else {
        resultado.textContent = 'As palavras não são anagramas.';
    }
}

function calcularFatorial() {
    var n = parseInt(document.getElementById("numero").value);
    var resultado = 1;

    for (var i = 2; i <= n; i++) {
        resultado *= i;
    }

    document.getElementById("resultado-fatorial").textContent = "O fatorial de " + n + " é: " + resultado;
}

function inverterString(string) {
    var novaString = "";
    for (var i = string.length - 1; i >= 0; i--) {
      novaString += string.charAt(i);
    }
    return novaString;
  }
  
  function inverter() {
    var input = document.getElementById("inputString");
    var output = document.getElementById("resultado-string");
    
    var stringOriginal = input.value;
    var stringInvertida = inverterString(stringOriginal);
    
    output.textContent = stringInvertida;
  }

  function verificarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário

    const senha = document.getElementById('senha').value;
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;

    if (senha.length < 8) {
      alert('A senha não possui pelo menos 8 caracteres');
      return false;
    }

    if (!regexMaiuscula.test(senha)) {
      alert('A senha não contém pelo menos uma letra maiúscula');
      return false;
    }

    if (!regexMinuscula.test(senha)) {
      alert('A senha não contém pelo menos uma letra minúscula');
      return false;
    }

    if (!regexNumero.test(senha)) {
      alert('A senha não contém pelo menos um número');
      return false;
    }

    alert('A senha atende a todos os critérios');
    return true;
  }
  
  function alternarVisualizacaoSenha() {
    const senhaInput = document.getElementById('senha');
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
    } else {
      senhaInput.type = 'password';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', verificarSenha);
    
    const visualizarSenhaButton = document.getElementById('visualizarSenha');
    visualizarSenhaButton.addEventListener('click', alternarVisualizacaoSenha);
  });
