const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

const noms = panier.map(item => item.nom);
console.log("noms :", noms);

const totaux_lignes = panier.map(item => item.nom + " " + (item.prix * item.quantite));
console.log("totaux lignes :", totaux_lignes.join(", "));

const prixsup100 = panier.filter(item => item.prix > 100).map(item => item.nom);
console.log("prix > 100 :", prixsup100);

const totalpanier = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);
console.log("total panier : " + totalpanier + " DH");

const nombrearticles = panier.reduce((acc, item) => acc + item.quantite, 0);
console.log("nombre d'articles :", nombrearticles);