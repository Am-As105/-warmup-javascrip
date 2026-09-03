const produit = {
 nom: "Clavier mecanique",
 prix: 450,
 stock: 12,
 categorie: "Informatique"
};

console.log(produit.nom + " - " + produit.prix + " DH - " + produit.stock + " en stock (" + produit.categorie + ")");

produitPrix = produit.prix * 1.1;

console.log("Nouveau prix : " + produit.prix.toFixed(2));

produit.enPromotion = false;

const keys = Object.keys(produit);
let i = 0;
while (i < keys.length) {
    let key = keys[i];
    if(key === "prix"){
        console.log(key + " : " + produit[key].toFixed(2));
        i++;
        continue;
    }
    console.log(key + " : " + produit[key]);
    i++;
}

function estDisponible(p) {
    return p.stock > 0;
}

console.log("estDisponible(produit) -> " + estDisponible(produit));