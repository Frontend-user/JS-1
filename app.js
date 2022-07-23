const button = document.getElementById("btn");
const color = document.querySelector(".color");
button.addEventListener("click", () => {
  hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

var hex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
  "7",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateHex() {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
