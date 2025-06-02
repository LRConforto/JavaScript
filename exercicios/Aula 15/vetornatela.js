//Essa seria a maneira convencional de mostrar os valores dos elementos do array.

let vetor = [4,5,6,7,8];

    for(let pos = 0; pos <= 4; pos++){ 
        console.log(`A posição ${pos} tem o valor ${vetor[pos]}`);
    }

//Porém agora com o JS atuliza tem uma maneira mais simplificada, especifica para Arrays. 

console.log('--------------------------------------')
console.log('--------------------------------------')

// Para cada posição dentro do array...
for (let posição in vetor){ 
    console.log(`A posição ${posição} tem o valor ${vetor[posição]}`)
}


//Os 2 fazem a mesma coisa, porém o segundo tem uma forma mais simples e moderna de ser escrito para as variaveis compostas.