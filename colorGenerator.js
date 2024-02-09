let btn = document.querySelector("button");
let box = document.querySelector(".box");

let colorCode = document.createElement("h2");
colorCode.innerHTML = "rgb(255, 255, 255)";
box.insertAdjacentElement("beforeend", colorCode);

function colorGenerate() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  randColor = `rgb(${r},${g}, ${b})`;
  return randColor;
}

btn.addEventListener("click", function () {
  let color = colorGenerate();
  document.body.style.backgroundColor = color;
  console.log(`color is set to ${color}`);
  colorCode.innerHTML = color;
});
