

const djur = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(djur);


const traits = {
    name: "Klas",
    age: 65,
    isOld: true,
}
console.log(traits);





let greeting = function (x) {
    return (`Hej ${x}`)
}
console.log(greeting("Jakob"));


for (let i = 0; i < djur.length; i++) {
    console.log(greeting(djur[i]));
}

