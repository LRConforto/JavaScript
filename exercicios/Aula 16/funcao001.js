
function parimpar(n){ 
    if(n%2 == 0){ 
        return `O número ${n} é Par!`
    } else { 
        return `O número ${n} é Ímpar!`
    }
}

/*
Da para fazer assim declarando uma variavel
let res = parimpar(12);
console.log(res); 
*/

//E assim diretamente: 
console.log(parimpar(231));