const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'orangered']

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)