


const  moves =  document.querySelector("#moves");
const  pairs =  document.querySelector("#pairs");
const  game =  document.querySelector("#game");
const  restart =  document.querySelector("#restart");
const  message =  document.querySelector("#message");



const cards = [
    { name: "football", image: "" },
    { name: "basketball", image: "" },
    { name: "tennis", image: "" },
    { name: "baseball", image: "" },
    { name: "volleyball", image: "" },
    { name: "boxing", image: "" },

    { name: "football", image: "" },
    { name: "basketball", image: "" },
    { name: "tennis", image: "" },
    { name: "baseball", image: "" },
    { name: "volleyball", image: "" },
    { name: "boxing", image: "" }
];



cards.sort( () => { return Math.random() - 0.5});

let first_card = null;
let second_card = null;

cards.forEach( (card) =>
{ 
    const card_img = document.createElement("div");
    card_img.classList.add("card_img");
    game.appendChild(card_img);

    const img = document.createElement("img");
    img.classList.add("image");
    card_img.appendChild(img); 
    img.setAttribute("src", card.image);
    img.setAttribute("alt", card.name);
    
    
    game.appendChild(card_img);

    card_img.addEventListener( "click",() => 
    {
        if ( first_card === null ) 
            first_card = card;
        else 
            second_card = card;

        // img.style.display = "block";

        // console.log(card);

    });
    
    

});




