const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;


if (age >= 18) {
    status = "majeur";
} else {
    status = "mineur";
}

console.log(` ${prenom}, ${age} j'habite à ${ville} .\n status : ${status}  \n  Formation en cours  ${estEnFormation}`  ); 

console.log( "prenom -> " , typeof prenom);
console.log( "age  ->" , typeof age);
console.log( "estEnFormation ->", typeof estEnFormation);

