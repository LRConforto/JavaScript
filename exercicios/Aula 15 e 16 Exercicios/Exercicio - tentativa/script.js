let array = [];

function adicionar(){
    let input = document.querySelector('#number');
    let num = document.querySelector('#number').value;   
    
    if(num.length == 0 || Number(num) <= 0 || Number(num) > 100 || array.includes(Number(num))){
        window.alert("Valor invalido, Insira um número de 1 a 100!")
    } else {
        num = Number(num);
        let adicionado = document.querySelector('#adicionado');
        let option = document.createElement('option');

        option.text = `Valor ${num} adicionado!`
        array.push(num) 
        adicionado.appendChild(option)    
        console.log(option.value)
        
        input.value = ''
        input.focus()
    }

}


function finalizar(){ 
    let msg = document.getElementById('msg');
    let maior = Math.max(...array);
    let menor = Math.min(...array);
    let soma = array.reduce(function(acumulador, valorAtual){       
        return acumulador + valorAtual;
    }, 0)
    

    msg.innerHTML = `<p>Ao todo temos <strong>${array.length}</strong> cadastrados!<p>`
    msg.innerHTML += `<p>O maior valor informado foi <strong>${maior} </strong>!</p>`
    msg.innerHTML += `<p>O menor valor informado foi <strong>${menor} </strong>!</p>`
    msg.innerHTML += `<p>Somando todos os valores temos <strong>${soma} </strong> !`
    msg.innerHTML += `<p>A média dos valores digitados é : <strong>${soma / array.length} </strong>!`
 
}