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