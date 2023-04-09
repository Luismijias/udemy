//par chave/valor
//Neste exemplo iremos mostrar em qual local a chave do nome foi criada.
const saudacao = 'Opa' // contexto léxico 1

function exec1() {   
   var nova = saudacao
   console.log('valor da função1:',nova) 

   return nova
}


function exec2() {
    const saudacao = 'Falaaa' /**contexto léxico 2 .Neste casa não gera comflito
    //  *chaves/nomes diferentes pois estão em escopos diferentes do código. Existe
    //   um porém se no caso o return não encontrar esta chave neste contexto irá
    //    procurar no escopo pai.**/
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor ou nome/valor
// Neste exemplo o peso e a idade aparecem em escopos diferentes.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'Rua Muito Legal',
        numero: 345,
        idade:55,
        peso:82
    } 
    
}

console.log('valor original da constante:',saudacao)
exec1()
console.log('valor da função2:',exec2())
console.log('valor do objeto cliente:',cliente)

