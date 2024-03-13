function calcular() {
  let peso = document.getElementById("peso").value;
  let alt = document.getElementById("alt").value;
  let imc = peso / (alt * alt);

  if (imc < 18.5) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta abaixo do peso, seu imc é :${imc.toFixed(2)}`;
    document.getElementById("resultado").style.color = "yellow";
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta com o peso normal, seu imc é: ${imc.toFixed(2)}`;
    document.getElementById("resultado").style.color = "green";
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta com sobrepeso, seu imc é: ${imc.toFixed(2)}`;
    document.getElementById("resultado").style.color = "gold";
  } else if (imc >= 30 && imc <= 34.9) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta com obesidade tipo 1 seu imc é: ${imc.toFixed(
      2
    )}`;
    document.getElementById("resultado").style.color = "tomato";
  } else if (imc >= 35 && imc <= 39.9) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta com obesidade tipo 2 seu imc é: ${imc.toFixed(
      2
    )}`;
    document.getElementById("resultado").style.color = "red";
  } else if (imc > 40) {
    document.getElementById(
      "resultado"
    ).textContent = `Você esta com obesidade tipo 3 seu imc é: ${imc.toFixed(
      2
    )}`;
    document.getElementById("resultado").style.color = "DarkRed";
  }
}
