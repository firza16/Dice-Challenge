var gambar1 = document.querySelector(".img1");
var gambar2 = document.querySelector(".img2");
var title = document.querySelector(".judul");
var tombol = document.querySelector(".tombol");

tombol.addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  gambar1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  gambar2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!";
  } else {
    title.innerHTML = "Player 2 Wins!";
  }
});
