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
