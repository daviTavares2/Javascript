
const image = document.querySelector("img");

    image.addEventListener("click", ()=>{
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if(randomNumber1 === 1){
        image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
         if(randomNumber1 === 2){
       image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
         if(randomNumber1 === 3){
          image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
         if(randomNumber1 === 4){
            image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
         if(randomNumber1 === 5){
           image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
         if(randomNumber1 === 6){
        image.setAttribute("src", `images/dice${randomNumber1}.png`);

        }
    })

