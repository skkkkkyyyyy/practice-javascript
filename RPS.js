function RPS(){

    const choices = ["gu","choki","pa","HYPER MUTEKI"];

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


    let select =document.createElement("select");

    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement('img');
    image.alt = "Choice";
    image.style.width = "600px";
    image.style.height = "400x";
    image.src="https://pbs.twimg.com/media/EtBKiJTU0AIUywf.jpg";

    gameContainer.appendChild(image);

}