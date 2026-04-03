class Aluno {
    id : number;
    nome : string;
    ra : number;
    nascimento : Date;

    constructor(id : number, nome : string, ra : number, nascimento : Date) {
        this.id = id;
        this.nome = nome;
        this.ra = ra;
        this.nascimento = nascimento;
    }

    estudar() : void {
        console.log(`${this.nome} está estudando...`);
    }

    descansar() : void {
        console.log(`${this.nome} está descansando...`);
    }
}

const aluno1 = new Aluno(1, "Eduardo", 562259, new Date(2007, 1, 25));

console.log("###### App #######");
console.log(`ID: ${aluno1.id}`);
console.log(`Nome: ${aluno1.nome}`);
console.log(`RA: ${aluno1.ra}`);
console.log(`Nascimento: ${aluno1.nascimento.toDateString()}`);
aluno1.estudar();
aluno1.descansar();
console.log("##################");