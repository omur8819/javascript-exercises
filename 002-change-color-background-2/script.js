// let guess_count = 0;

// const random_number = Math.floor(Math.random() * 100 + 1);
// console.log(random_number);

// document.querySelector("#check_it").addEventListener("click", checkNumber);
// document.querySelector("#nr_game").addEventListener("keyup", function(event){
//     if (EventTarget.keyCode === 13)
//     checkNumber()
// });

// function checkNumber () {
//     guess_count++;
//     let userInputElement = document.querySelector("#nr_game");
//     let answerLabelElement = document.querySelector("#answer");
    
//     document.querySelector('#count_it').innerText = `Guess count is: ${guess_count}`;

//     if(userInputElement.value == random_number) {
//         alert("You are the winner!");
//     }else if (userInputElement.value == "") {
//         answerLabelElement.innerText = "Enter a number";
//     }else if (userInputElement.value > random_number) {
//         answerLabelElement.innerText = "Try a smaller number!";
//     }else if (userInputElement.value < random_number) {
//         answerLabelElement.innerText = "Try a higher number!";
//     }else if (isNaN(userInputElement.value)){
//         answerLabelElement.innerText = "It's not a number!";
//     } 
// }



const button = document.querySelector('button')
const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'orangered']

function changeBackground(){
    var colorRed = parseInt(Math.floor(Math.random() * 255 + 1));
    var colorGreen = parseInt(Math.floor(Math.random() * 255 + 1));
    var colorBlue = parseInt(Math.floor(Math.random() * 255 + 1));

// var colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = rgb(colorRed, colorGreen, colorBlue);
};

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);



// console.log(colorRed);
// console.log(colorGreen);
// console.log(colorBlue);