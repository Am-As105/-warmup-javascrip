const inscription = {
 nom: "",
 email: "aminaexample.com",
 motDePasse: "123",
 age: 17
};


// console.log(inscription.nom.length);

function validerInscription(donnees)
{
    let erreurs = []; 
    if (donnees.nom.length  < 2)
        erreurs = erreurs.concat("Le nom doit contenir au moins 2 caracteres");
    if (!donnees.email.includes("@") || !donnees.email.includes("."))
        erreurs = erreurs.concat("L'email n'est pas valide");
    if (donnees.motDePasse.length  < 8 )
        erreurs = erreurs.concat("Le mot de passe doit contenir au moins 8 caracteres");
     if (donnees.age  < 18 )
        erreurs = erreurs.concat("Vous devez avoir au moins 18 ans");  
    
    let result = {
        valide: false,
        erreurs:erreurs, 
    }
    return result;
    
    
}
console.log(validerInscription(inscription));