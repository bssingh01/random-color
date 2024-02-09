let btn = document.querySelector('button');
let box = document.querySelector('.box');
let heading = document.querySelector('h1');

let colorCode = document.createElement('p');
colorCode.innerHTML = "rgb(255, 255, 255)";
box.insertAdjacentElement('beforeend', colorCode);

function colorGenerate () {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    randColor = `rgb(${r},${g}, ${b})`;
    return randColor;
}

btn.addEventListener("click", function(){
    let color = colorGenerate();

    this.style.backgroundColor = color;
    box.style.backgroundColor = color;
    heading.style.color = color;
    console.log(`color is set to ${color}`);
    colorCode.innerHTML = color;
});