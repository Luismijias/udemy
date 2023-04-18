function teste1(num) {
    if(num > 7)
    console.log('teste1:',num)
   console.log('teste1:',"Final")
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); // cuidado com o ponto virgula (;) ele finaliza uma estrutura de controle.
    console.log(num)
}

teste2(9)
teste2(4)