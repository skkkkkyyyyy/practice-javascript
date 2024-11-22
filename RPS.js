function RPS(){

    const choices = ["gu","choki","pa","HYPER MUTEKI"];
    let handImage="gu"



    let select = document.createElement("select");

    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        // handImage = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "Let's　BUTTLE"

    gameContainer.appendChild(choiceButton)

    let enemyImage = document.createElement('img');
    enemyImage.alt = "Choice";
    enemyimage.style.width = "300px";
    enemyImage.style.height = "200x";


    let image = document.createElement('img');
    image.alt = "Choice";
    image.style.width = "300px";
    image.style.height = "200x";

    
    choiceButton.addEventListener("click", function(){
        console.log("選ばれた", select.value, handImage)
        handImage = select.value
        switch(select.value){
            case"gu":
                image.src="https://lohas.nicoseiga.jp/thumb/10685658i?1620044293"
                break;
            case"choki":
                image.src="https://pbs.twimg.com/media/DuGMzO5U4AAAWj1.jpg"
                break;
            case"pa":
                image.src="https://pbs.twimg.com/media/Ena2PcYUcAAfwU7.jpg"
                break;        
            case"HYPER MUTEKI":
                image.src="https://pbs.twimg.com/media/EtBKiJTU0AIUywf.jpg"
                break;
        }
        let enemyHand = choices[Math.floor(Math.random() * choices.length)];
        
        
        switch(select.value){
            case"gu":
                enemyImage.src="https://lohas.nicoseiga.jp/thumb/10685658i?1620044293"
                break;
            case"choki":
                enemyImage.src="https://pbs.twimg.com/media/DuGMzO5U4AAAWj1.jpg"
                break;
            case"pa":
                enemyImage.src="https://pbs.twimg.com/media/Ena2PcYUcAAfwU7.jpg"
                break;        
            case"HYPER MUTEKI":
                enemyImage.src="https://pbs.twimg.com/media/EtBKiJTU0AIUywf.jpg"
                break;
        }
    })
    gameContainer.appendChild(image);
}

 //let select = document.createElement("select");
    // let option = document.createElement("option");
    // let option2 = document.createElement("option2");
    // let option3 = document.createElement("option3");
    // const gu="gu";
    // option.value = gu;
    // option.textContent = "gu";
    // select.appendChild(option);
    // option.value = choki;
    // option.textContent = "choki";
    // select.appendChild(option2);
    // option.value = choki;
    // option.textContent = "choki";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);

