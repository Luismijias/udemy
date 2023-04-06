const escola = "Cod3r"

console.log("Qual o caracter que está no índice 4 é: ",escola.charAt(4))//mostra o carectar que está no índice solicitado

console.log(escola.charAt(5))//retorna nulo

console.log("O caracter que está no índice 3 é representado na tabela ASC ou unicode por:",escola.charCodeAt(3))// retorna o valor da tabela ASC

console.log("posição no índice da letra d é:",escola.indexOf('d'))//Mostra uma posição no indice de um caracter ele procura.

console.log("A partir do índice 1 as strings restantes são:",escola.substring(1))//mostra os strings a partir do selecionada que no casso é o 1 todos os strings restantes.

console.log("O trecho dos índices entre 0 e 3 tem as seguintes strings:",escola.substring(0,3))// mostra um trecho de string com iníco e fim .

console.log("Concatenando os tres valores com 'concat' fica:",'Escola '.concat(escola).concat(" ;-)").concat("!"))//concatena(liga ou junta) as strings.

console.log("Concatenando os tres valores com '+' fica:",'Escola '+ escola +" ;-)" +"!" )//concatenando de outro maneira.

console.log("Substituindo o C por & fica:",escola.replace("C",'&'))//substitui caracteres

console.log("Substituindo o 3 por $ fica:",escola.replace(3,'$'))//substitui caracteres

console.log("Substituindo todos os dígitos pela letra e fica:",escola.replace(/\d/,'e'))//substitui todos os dígitos dentro do texto pela letra "e".

console.log("Substituindo todas as letras e os dígitos pela letra e fica:",escola.replace(/\w/g,'e'))//substitui todas as letra e os dígitos pela letra "e".

console.log("Criando um array ultilizando a letra 'a' com elemento separador fica:",'Ana,Maria,Pedro'.split('a'))//Ultiza a vírgula como elemento separador para criar um array

console.log("Criando um array ultilizando a vírgula com elemento separador fica:",'Ana,Maria,Pedro'.split(','))//Ultiza a vírgula como elemento separador para criar um array








