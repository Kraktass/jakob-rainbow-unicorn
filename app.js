var djur = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(djur);
var traits = {
    name: "Klas",
    age: 65,
    isOld: true
};
console.log(traits);
var greeting = function (x) {
    return ("Hej ".concat(x));
};
console.log(greeting("Jakob"));
for (var i = 0; i < djur.length; i++) {
    console.log(greeting(djur[i]));
}
