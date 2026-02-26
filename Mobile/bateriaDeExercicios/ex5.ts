interface skeep {
    energia : number;
    velocidade : number;
    temperatura : number;
    humor : string;
}

const skeep1 : skeep = {energia: 100, velocidade: 0, temperatura: 36.5, humor: "feliz"};

console.log("Skeep 1: \nEnergia ==> ", skeep1.energia, "\nVelocidade ==> ", skeep1.velocidade, "\nTemperatura ==> ", skeep1.temperatura, "\nHumor ==> ", skeep1.humor);