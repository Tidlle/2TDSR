import promptSync = require("prompt-sync");
const prompt = promptSync();

var umidade : number = parseFloat(prompt("Digite a umidade: "));

if (umidade > 60) {
    console.log("O ar está úmido");
}
else if (umidade >= 30 && umidade <= 60) {
    console.log("O ar está seco");
}
else {
    console.log("O ar está muito seco");
}