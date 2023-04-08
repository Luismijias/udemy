const valores = [7.7, 8.9, 6.3, 9.2];
console.log('Elementos na posição 0 e 3 são:', valores[0], valores[3]);//mostra os elementos na posição 0 e 3
console.log(valores[4]); // undefined porque não exite esse elemento.

valores[4] = 10;

console.log(valores[4]); // agora recebeu 10 então aparece.
console.log(valores);
console.log(valores.length); // mostra o tamanho do array

valores.push({ id: 3 }, false, null, "teste"); //O método push adiciona valores a um array.
console.log(valores)

valores.push(727);
console.log("array = com o 727 no final", valores);

console.log(valores.pop()); //remove o ultimo valor do array
console.log(valores);

console.log(valores.shift()); //remove o primeiro elemento do array
console.log(valores);

delete valores[1]; //deleta o indice selecionado
console.log(valores);

console.log(typeof valores);
