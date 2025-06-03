//Aqui eu estou dando uma predefinição pros paramentros, por exemplo se o paramentro não for passado, ele vai considerar que ele é 0.
function soma(n1=0, n2=0) { 
    return n1 + n2
}

console.log(soma(5));

//Function declarada atraves de uma variável
console.log(`------------------- Função declarada dentro de uma variável`);

let f = function(x){ 
    return x*2
}

console.log(f(2))


//Arrow Function;
console.log(`------------------- Arro Function abaixo:`);

let a = (x) => { 
   return x * 2;
}

console.log(a(2))