document.getElementById("revealBtn").addEventListener("click", function () {
  var card = document.getElementById("surpriseCard");
  var sound = document.getElementById("clickSound");
  card.style.display = "block";
  sound.play();
});

