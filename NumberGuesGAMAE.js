function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    let message = document.createElement("p");
    let input = document.createElement("input");
    
    input.type="number"
    
    let button = document.createElement("button");
    message.textContent = "文字"

    getContainer.appendChild(input);
    getContainer.appendChild(button);
    getContainer.appendChild(message);

}