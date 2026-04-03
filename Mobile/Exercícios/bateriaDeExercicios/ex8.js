var Aluno = /** @class */ (function () {
    function Aluno(id, nome, ra, nascimento) {
        this.id = id;
        this.nome = nome;
        this.ra = ra;
        this.nascimento = nascimento;
    }
    Aluno.prototype.estudar = function () {
        console.log("".concat(this.nome, " est\u00E1 estudando..."));
    };
    Aluno.prototype.descansar = function () {
        console.log("".concat(this.nome, " est\u00E1 descansando..."));
    };
    return Aluno;
}());
var aluno1 = new Aluno(1, "Eduardo", 562259, new Date(2007, 1, 25));
console.log("###### App #######");
console.log("ID: ".concat(aluno1.id));
console.log("Nome: ".concat(aluno1.nome));
console.log("RA: ".concat(aluno1.ra));
console.log("Nascimento: ".concat(aluno1.nascimento.toDateString()));
aluno1.estudar();
aluno1.descansar();
console.log("##################");
