var primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))
var segundoValor = parseFloat(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração: ")

switch (operacao) {
 case '1': document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + (primeiroValor / segundoValor) + "</h2>")
  break;

 case '2': document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + (primeiroValor * segundoValor) + "</h2>")
  break;

 case '3': document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + (primeiroValor + segundoValor) + "</h2>")
  break;

 case '4': document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + (primeiroValor - segundoValor) + "</h2>")
  break;

 default: document.write("<h2>" + operacao + " invalido" + "</h2>")
}