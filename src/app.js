window.onload = function () {
  generateCard();
};
function generateCard() {
  const figuras = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  let randomFigura = figuras[Math.floor(Math.random() * figuras.length)];
  let randomValor = valores[Math.floor(Math.random() * valores.length)];
  
  // Asigna el contenido de la carta
  document.querySelector(".figura").innerHTML = randomFigura;
  document.querySelector(".valor").innerHTML = randomValor;
  document.querySelector(".figuraInvertido").innerHTML = randomFigura;
  
  // Accede al DOM para cambiar el color correctamente
  let cardElement = document.getElementById("card");
  if (randomFigura === "&hearts;" || randomFigura === "&diams;") {
      cardElement.style.color = "red";
  } else {
      cardElement.style.color = "black";
  }
}

