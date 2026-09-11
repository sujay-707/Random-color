let btn = document.querySelector("button");

btn.addEventListener("click", () => {

    let color = getRandomColor();

    let h2 = document.querySelector("h2");
    let div = document.querySelector(".color-box");

    h2.innerText = color;
    div.style.backgroundColor = color;

});

function getRandomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}