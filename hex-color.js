{
  const body = document.querySelector("body");
  var hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  var value = document.querySelector(".hexcode");

  var button = document.querySelector("button");

  button.addEventListener("click", change_bg);

  function change_bg() {
    var hex = "#";
    var i = 0;
    for (; i < 6; i++) {
      const index = parseInt(Math.random() * hexCode.length);
      hex += hexCode[index];
    }
    body.style.backgroundColor = hex;
    value.textContent = hex;
    hex = "";
  }
}
