const produit = {
 nom: "Clavier mecanique",
 prix: 450,
 stock: 12,
 categorie: "Informatique"
};

console.log(produit.nom + " - " + produit.prix + " DH - " + produit.stock + " en stock (" + produit.categorie + ")");

produit.prix = produit.prix * 1.1;
console.log("Nouveau prix : " + produit.prix);

produit.enPromotion = false;

const keys = Object.keys(produit);
let i = 0;
while (i < keys.length) {
    let key = keys[i];
    console.log(key + " : " + produit[key]);
    i++;
}

function estDisponible(p) {
    return p.stock > 0;
}

console.log("estDisponible(produit) -> " + estDisponible(produit));