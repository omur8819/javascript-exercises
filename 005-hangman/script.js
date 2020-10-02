class Hangman {
  constructor(wordList) {
    this.wordList = wordList;
    this.randomNumber = Math.floor(Math.random() * this.wordList.length);
    this.randomWord = this.wordList[this.randomNumber];
    this.counter = 0;
    this.createInputArea()
  }

  createInputArea() {
    let inputSection = document.querySelector("#inputSection");
    const stone = `<span class="letter"></span>`;

    for (let i of this.randomWord) {
      inputSection.innerHTML += stone;
    }
  }

  enterInput(event) {

    let pressedButton = event.key.toUpperCase()
    let checkedGuess = this.randomWord.indexOf(pressedButton);
    let allSpans = document.querySelectorAll(".letter");
    const notifyElement = document.querySelector("#message");
    let enteredLettersElement = document.querySelector('#enteredLetters')

    // ? isAlpha (regex) helper function
    var isAlpha = function(ch) {return /^[A-Z]$/i.test(ch);}
    // ? -------

    // if pressedButton is not in the word 

    if (checkedGuess == -1 && isAlpha(pressedButton)) {
      notifyElement.innerText = "WRONG!";
      if (!(enteredLettersElement.innerText.includes(pressedButton))) {
          enteredLettersElement.innerText += `${pressedButton}, `
          this.hang()
      } else {
        this.warn()
        setTimeout(this.slideBottom, 2000) 
        setTimeout(this.clearWarning, 3000)
      }
    } 

    // if pressedButton is in the word 

    else {
      for (let i = 0; i < this.randomWord.length; i++) {
        if (pressedButton == this.randomWord[i]) {
          if(allSpans[i].innerText.includes(pressedButton)) {
            this.warn()
            setTimeout(this.slideBottom, 2000) 
            setTimeout(this.clearWarning, 3000)
            break
          } else{
            allSpans[i].innerText = pressedButton;
            notifyElement.innerText = "NICE TRY!";
          }
        }
      }
    }

    this.getResult()
  }

  warn() {
    const warningMessage = document.createElement('div')
    warningMessage.setAttribute('class', 'warning-popup')
    document.querySelector('body').appendChild(warningMessage)
    warningMessage.innerText = 'You have already entered this letter'
  }

  slideBottom() {
    const warningMessage = document.querySelector('.warning-popup')
    warningMessage.classList.add('moved')
  }

  clearWarning () {
    const warningMessage = document.querySelector('.warning-popup')
    document.querySelector('body').removeChild(warningMessage)
  }

  hang () {
    const man = ['<circle id="head" cx="130" cy="55" r="20" stroke="white"stroke-width="4" fill="none"/>',
    '<line id="body" x1="130" y1="75" x2="130" y2="150" style="stroke: white; stroke-width: 5"/>',
    '<line id="rightArm" x1="130" y1="115" x2="155" y2="95" style="stroke: white; stroke-width: 5" stroke-linecap="round"/>',
    '<line id="leftArm" x1="130" y1="115" x2="105" y2="95" style="stroke: white; stroke-width: 5" stroke-linecap="round"/>',
    '<line id="leftLeg" x1="130" y1="148" x2="105" y2="175" style="stroke: white; stroke-width: 5" stroke-linecap="round"/>',
    '<line id="rightLeg" x1="130" y1="148" x2="155" y2="175" style="stroke: white; stroke-width: 5" stroke-linecap="round"/>']
    
    let scaffold = document.querySelector('#scaffold');
    scaffold.innerHTML += man[this.counter];
    this.counter += 1;
  }

  getResult() {
    const sentenceWin = 'Congratulations! You won! 😃'
    const sentenceLose = 'Unfortunately you lost. 😕'
    let allSpans = document.querySelectorAll(".letter");
    let currentWord = '';
    allSpans.forEach((span) => {
      currentWord += span.innerText
    }) 

    if (this.counter == 6) {
      document.querySelector('body').innerHTML += 
      `<div id="alertBox">
      <p>${sentenceLose}</p>
      <p>...the word was: ${this.randomWord}</p>
      <button id='plyBtn'>Play Again</button>
      </div>`
      document.querySelector('body').setAttribute('onkeydown','')
    } else if (currentWord == this.randomWord) {
      document.querySelector('body').innerHTML += 
      `<div id="alertBox">
      <p>${sentenceWin}</p>
      <p>...the word was: ${this.randomWord}</p>
      <button id='plyBtn'>Play Again</button>
      </div>`
      document.querySelector('body').setAttribute('onkeydown','')
    } 

    const playAgainBtn = document.querySelector('#plyBtn')
    playAgainBtn.addEventListener('click', this.playAgain)
    
  }

  playAgain() {
    location.reload()
  }
}



let hango = new Hangman(["PYTHON", "JAVASCRIPT", "HTML", "REACT", "CSS", "OSCAR", "CLARUSWAY"]);