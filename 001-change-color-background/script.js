const button = document.querySelector('button')
const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'orangered']


function changeBackground(){
    var colorRed = Math.floor(Math.random * 255 +1);
    var colorGreen = Math.floor(Math.random * 255 +1);
    var colorBlue = Math.floor(Math.random * 255 +1);


// const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}

body.style.backgroundColor = rgb(r, g, b);
button.addEventListener('click', changeBackground)