function resultadoNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado com a nota :" + nota)
  } else {
    console.log("Estude mais vc foi reprovado com a nota :" + nota)
  }
}

resultadoNota(8.1)
resultadoNota(3.6)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`O valor ( ${valor} ) é verdadeiro`)
    } else {
        console.log(`O valor ( ${valor} ) é falso`)
    }
}
 
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
