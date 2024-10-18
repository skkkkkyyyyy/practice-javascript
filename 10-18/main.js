const gameSelector = document.getElementById('game-selector');
const gameContainer =document.getElementById('game-container');



gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){

        case "none":
            gameContainer.textContent="ゲーム選んだら表示されんで"
            break;
        case "click-counter":
            ClickCounterGAME();
            break;
        case "numbe-guess":
            NumberGuessGame();
            break;
    }
    })


function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.max = 100;
    input.min = 1;
    input.placeholder = "数字を入力 (１～１００)"
    let button = document.createElement("button");
    button.textContent = "予想!"

    // ボタンが押されたときに実行
    button.addEventListener("click", function()
    {
        const userGuess = parseInt(input.value);
        if(userGuess == randomNumber){
            message.textContent = "Exactly（その通りでございます）！"
        }else if(userGuess > randomNumber){
            message.textContent = "Number is higher!"
        }else{
            message.textContent = "Number is lower!"
        }
    })

    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
    }

function ClickCounterGAME(){
    let count = 0;
    const gameContainer = document.getElementById("game-container");
    let button = document.createElement("button");
    button.textContent = "クリック";
    let counter = document.createElement("p");
    counter.textContent = count;
    button.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    let button2 = document.createElement("button");
    counter.textContent = "";

    button2.addEventListener("click",function(){
        count = count + 10000002020;
        counter.textContent = count;
    })
    gameContainer.appendChild(button);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}

