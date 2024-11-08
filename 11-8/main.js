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

         case "RPS":
            RPS();
            break;   

    }
    })






