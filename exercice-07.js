function genererslug(t) {
    let s = t.trim().toLowerCase();
    let m = s.split(" ");
    let f = [];
    let i = 0;
    while (i < m.length) {
        if (m[i] !== "") {
            f.push(m[i]);
        }
        i++;
    }
    return f.join("-");
}

function comptermots(p) {
    let m = p.trim().split(" ");
    let f = [];
    let i = 0;
    while (i < m.length) {
        if (m[i] !== "") {
            f.push(m[i]);
        }
        i++;
    }
    return f.length;
}

function initiales(n) {
    let p = n.trim().split(" ");
    let res = "";
    let i = 0;
    while (i < p.length) {
        if (p[i] !== "") {
            res += p[i][0].toUpperCase() + ".";
        }
        i++;
    }
    return res;
}

const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomcomplet = "amina el idrissi";

console.log("genererSlug(titre) -> " + genererslug(titre));
console.log("compterMots(phrase) -> " + comptermots(phrase));
console.log("initiales(nomComplet) -> " + initiales(nomcomplet));
console.log("genererSlug(\" Sprint 1 \") -> " + genererslug(" Sprint 1 "));