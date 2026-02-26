"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var umidade = parseFloat(prompt("Digite a umidade: "));
if (umidade > 60) {
    console.log("O ar está úmido");
}
else if (umidade >= 30 && umidade <= 60) {
    console.log("O ar está seco");
}
else {
    console.log("O ar está muito seco");
}
