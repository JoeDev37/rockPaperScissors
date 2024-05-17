// rock paper scissors game 

function play1() {
    pickComputerMove();

    let result = '';

    if (computerChoice === 'rock') {
        result = 'you lose!';
    } else if (computerChoice === 'paper') {
        result = 'you win!';
    } else if (computerChoice === 'scissors') {
        result = 'tie';
    }
    //  console.log(result);
     document.getElementById('outPut').innerHTML = `you: scissors.<br> 
    computer: ${computerChoice}. <br>
    result: ${result}`;
}

function play2() {
    pickComputerMove();

    let result = '';

    if (computerChoice === 'rock') {
        result = 'you win!';
    } else if (computerChoice === 'paper') {
        result = 'tie';
    } else if (computerChoice === 'scissors') {
        result = 'you lose!';
    }
    // console.log(result);
    document.getElementById('outPut').innerHTML = `you: paper.<br> 
    computer: ${computerChoice}. <br>
    result: ${result}`;
}

function play3() {
    pickComputerMove();

    let result = '';

    if (computerChoice === 'rock') {
        result = 'tie';
    } else if (computerChoice === 'paper') {
        result = 'you lose!';
    } else if (computerChoice === 'scissors') {
        result = 'you win!';
    }
    // console.log(result);
    document.getElementById('outPut').innerHTML = `you: rock.<br> 
    computer: ${computerChoice}. <br>
    result: ${result}`;
}

let computerChoice = '';

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper'
    }  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'scissors'
    }
    // console.log(computerChoice)
}