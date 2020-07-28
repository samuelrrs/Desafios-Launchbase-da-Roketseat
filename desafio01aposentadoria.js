const nome = "João";
const sexo = "M";
const idade = 68;
const contribuicao = 23;



if (sexo == "F"){
    if( idade + contribuicao >= 85) {
        console.log(`${nome} você pode se aposentar`)
    } else {
        console.log('Ainda não pode se aposentar')
    }
    
}


if (sexo == "M"){
    if( idade + contribuicao >= 95) {
        console.log(`${nome} você pode se aposentar`)
    } else {
        console.log('Ainda não pode se aposentar.')
    }
    
}