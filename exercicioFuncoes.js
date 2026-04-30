function antecessor(num) {
    console.log("O antecessor é: ")
    return num - 1
}
console.log(antecessor(10));
console.log("____________________________________________________\n");

function sucessor(num) {
    console.log("O sucessor é: ")
    return num + 1    
}
console.log(sucessor(10));
console.log("____________________________________________________\n");

function converterTemperatura(celsius) {
    console.log("A conversão de Celsius para Fahrenheit é: ")
    return fahrenheit = (celsius * 9/5) + 32   
}
console.log(converterTemperatura(30));
console.log("____________________________________________________\n");

function verificarIdade(idade) {
    console.log("A pessoa é: ")
    if(idade > 18){
        return "Maior de idade!"
    }else{
        return "Menor de idade!"
    }       
}
console.log(verificarIdade(20));
console.log("____________________________________________________\n");

function calcularDesconto(produto, desconto) {
    let valor = (produto * desconto) / 100
    console.log("Valor total com desconto é: ")
    return produto - valor
}
console.log(calcularDesconto(120, 10));