

const contador = document.getElementById('contador');

let visitas = localStorage.getItem('visitas');

if (visitas === null) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}

localStorage.setItem('visitas', visitas);

contador.textContent = + visitas;


if (!localStorage.getItem("visitou")) {
  alert("Olá! Seja bem-vindo(a) ao meu cartão de links 😊");
  localStorage.setItem("visitou", "sim");
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicado");
    setTimeout(() => btn.classList.remove("clicado"), 200);
  });
});

 const texto = "'Full Stack web Developer'";
    let i = 0;
    function escrever() {
      if (i < texto.length) {
        document.getElementById("cargo").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
      }
    }
    escrever();


function enviarEmail() {
  const corpo = encodeURIComponent("Olá Guilherme, gostaria de entrar em contato.");
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=guilhermersilvaoliveira@gmail.com&su=Contato%20pelo%20portfólio&body=${corpo}`, '_blank');
}


