var KV = 0.50;
var KVh = 0;
var calculoKV = function (KV, KVh) {
    return KV * KVh;
};
function calcularValor(casa1, casa2, casa3, casa4, casa5) {
    console.log("##############################");
    console.log("Casa nº 14: ", "KV/h:" + casa1, "R$: " + calculoKV(KV, casa1));
    console.log("Casa nº 35: ", "KV/h:" + casa2, "R$: " + calculoKV(KV, casa2));
    console.log("Casa nº 54: ", "KV/h:" + casa3, "R$: " + calculoKV(KV, casa3));
    console.log("Casa nº 71: ", "KV/h:" + casa4, "R$: " + calculoKV(KV, casa4));
    console.log("Casa nº 92: ", "KV/h:" + casa5, "R$: " + calculoKV(KV, casa5));
    console.log("##############################");
}
calcularValor(230, 120, 350, 410, 70);
