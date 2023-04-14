/**  O exemplo é : seu eu fizer 2 trabalhos durante a semana eu compro uma tv de 54 etomomo sorvete
 *  Se eu fizer apenas um trabalho eu compro a tv de 32 e tomo sorvete.
 *  Se eu não fizer nenhum trabaho eu nào tomo sorvete e fico saudável. **/

function consdicaoCompras(trabalho1,trabalho2) {
    const compraSorverte = trabalho1 || trabalho2
    const compraTv54 = trabalho1 && trabalho2
    const compraTv32 = trabalho1 != trabalho2 // só dá verdadeiro se forem diferentes
    const manterSaudavel =! compraSorverte
    return{ compraSorverte,compraTv54,compraTv32,manterSaudavel}
    //const manterSaudavel2 = !!(trabalho1^trabalho2) // bitwise xor
}

console.log("Executei os dois trabalhos",consdicaoCompras(true,true))
console.log("Executei apenas um dos dois trabalhos",consdicaoCompras(true,false))
console.log("Executei apenas um dos dois trabalhos",consdicaoCompras(false,true))
console.log("Executei nenhum dos dois trabalhos",consdicaoCompras(false,false))
