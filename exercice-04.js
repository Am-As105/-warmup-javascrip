

const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre");

const index = courses.indexOf("lait");
if (index !== -1) {
    courses.splice(index, 1);
}

console.log( "count " ,courses.length); 

for (let i = 0; i < courses.length; i++) {
    console.log((i + 1) + ". " + courses[i]);
}

if (courses.includes("cafe"))
    {
    console.log("succese");
}