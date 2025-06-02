let num = [5, 8, 2, 9, 3];


num.sort(); //colocar em ordem
num.push(1); //Adiciona o valor 1 no ultimo elemento, como o num.sort veio antes, ele organizou em crescente antes e depois veio o num.push e adicionou o 1 no final.Caso o valor 1 fosse add antes ele ficaria em crescente também.
num[6] = 10;

console.log(num)
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do array é ${num[0]}`);

console.log(`${num.indexOf(3)}`)
console.log(`${num.indexOf(11)}`) //Como não tem o valor 11 no vetor, ele retorna -1.  -1 para o JS significa que ele pesquisou dentro do vetor e não achou nenhum valor 11.