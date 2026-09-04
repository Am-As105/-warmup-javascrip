


const  moves =  document.querySelector("#moves");
const  pairs =  document.querySelector("#pairs");
const  game =  document.querySelector("#game");
const  restart =  document.querySelector("#restart");
const  message =  document.querySelector("#message");



const cards = [
    { name: "football", image: "imgs/football.jpg" },
    { name: "basketball", image: "imgs/basketball.jpg" },
    { name: "tennis", image: "imgs/tennis.jpg" },
    { name: "baseball", image: "imgs/baseball.jpg" },
    { name: "volleyball", image: "imgs/volleyball.jpg" },
    { name: "boxing", image: "imgs/boxing.jpg" },

    { name: "football", image: "imgs/football.jpg" },
    { name: "basketball", image: "imgs/basketball.jpg" },
    { name: "tennis", image: "imgs/tennis.jpg" },
    { name: "baseball", image: "imgs/baseball.jpg" },
    { name: "volleyball", image: "imgs/volleyball.jpg" },
    { name: "boxing", image: "imgs/boxing.jpg" }
];



cards.sort( () => { return Math.random() - 0.5});

let first_card = null;
let second_card = null;
// let  is_match  = false;
let found_cards = [];
let lock_clik = false;


cards.forEach( (card) =>
{ 
    const card_img = document.createElement("div");
    card_img.classList.add("card_img");

    const img = document.createElement("img");
    img.classList.add("image");
    card_img.appendChild(img); 
    img.setAttribute("src", card.image);
    img.setAttribute("alt", card.name);
    
    
    game.appendChild(card_img);

    card_img.addEventListener( "click",() => 
    {
        if(found_cards.includes(card))
            return;
        if(lock_clik)
            return;

        img.style.display = "block";
        
        if ( first_card === null) 
        {
            first_card = card;
            first_card.img = img;
        }   
        else 
        {
            second_card = card;
            second_card.img = img
            lock_clik = true;
            
            
            if (first_card.name === second_card.name)
            {
                 found_cards.push(first_card);
                 found_cards.push(second_card);
                 lock_clik =false;
            }else 
            {
                second_card.img = img;
                setTimeout( () => 
                {
                    first_card.img.style.display = "none";
                    second_card.img.style.display = "none";
                    first_card = null;
                    second_card = null;
                    lock_clik = false;
                    
                }, 1000)
                
            }           
        }


        // console.log(card);

    });
    
    

});




