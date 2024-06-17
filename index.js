const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = [];

console.log("Digite um número para saber sua tabuada:");

process.stdin.on("data", function(data){
    if(numero){
        numero = Number(data.toString().trim());
        for (let i = 0; i < tabuada.length; i++) {
            console.log(numero + " x " + tabuada[i] + " = " + numero * tabuada[i]);
        }
    }
});