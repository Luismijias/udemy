function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw false
  // throw 10
  throw 'Não grite por favor.'
//   throw {
//     nome: erro.name,
//     msg: erro.message,
//     date: new Date(),
//   }
}
function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.tuUpperCase() + "!!!") //trecho de código com potencial para falhar
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')//ocorrendo erro ou não o finally executa.
  }
}
const obj = { nome: "Roberto" }

imprimirNomeGritando(obj)

/**Obs:throw significa lançar me inglês e lança um erros personalizado. */
