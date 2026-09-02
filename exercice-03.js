for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Decollage ");



let somme = 0;
for (let i = 1; i <= 100; i++) {
    somme = somme + i;
}
console.log("Somme de 1 a 100 : " + somme);

let p = "Nombres pairs :";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        p = p + " " + i;
    }
}
console.log(p);

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
console.log("Décollage !");
