let tentativas = 0;
const limiteTentativas = 20;
let mensagem = "";

function tentar() {
  const numeroS = document.getElementById('numeroS');
  const ns = Number(numeroS.value);
  const res = document.getElementById('res');
  const a = document.getElementById('voltar');
  const input = document.getElementById('numeroS');
  const btn = document.getElementById('tentar'); // const == var

  if (ns == 30) { 
    res.innerHTML = `<p>Você acertou o número secreto!</p>`
    document.body.style.background = '#343A40'
    a.innerText = 'Voltar para a página principal'
    input.disabled = true;
    btn.disabled = true;
  } else if (ns > 30) {
    res.innerHTML = `<p>O número secreto é <strong>menor!</strong></p>`
    document.body.style.background = '#08090D'
    tentativas++;
  } else if (ns < 30) {
    res.innerHTML = `<p>O número secreto é <strong>maior!</strong></p>`
    document.body.style.background = '#08090D'
    tentativas++;
  } else {
    res.innerHTML += `<p>Número inválido!</p>`
    document.body.style.background = '#08090D'
  }

  if (tentativas >= limiteTentativas) {
    mensagem = "Você excedeu o limite de tentativas! Recarregue a pagina para jogar novamente!";
    input.disabled = true;
    btn.disabled = true;
  }else if (tentativas == 5) {
    res.innerHTML += "O numero está entre 20 e 50"
  }

  const mensagemEl = document.getElementById('mensagem');
  mensagemEl.textContent = mensagem;
}





/*let tentativas = 0;
const limiteTentativas = 3;
let mensagem = "";



function tentar() {
    var numeroS = window.document.getElementById ('numeroS')
    var ns = Number(numeroS.value)
    var res = window.document.getElementById ('res')
    var a = window.document.getElementById ('voltar')
  

    if (ns == 30) { 
        res.innerHTML = `<p>Você acertou o numero secreto</p>`
        window.document.body.style.background = '#343A40'
        a.innerText = ' Voltar para a pagina principal '
    
    }else if (ns > 30) {
        res.innerHTML = `<p>O numero secreto é <strong>menor!</strong></p>`
        window.document.body.style.background = '#08090D'
       
    }else if (ns < 30) {
        res.innerHTML = `<p>O numero secreto é <strong>maior!</strong></p>`
        window.document.body.style.background = '#08090D'
       
    }
    else{
       res.innerHTML += `<p>Você errou!<p>`
        window.document.body.style.background = '#08090D'
        
        
    }
    if (tentativas >= limiteTentativas) {
        mensagem = "Você excedeu o limite de tentativas!";
      }

    const mensagemEl = document.getElementById('mensagem');
  mensagemEl.textContent = mensagem;
}
*/