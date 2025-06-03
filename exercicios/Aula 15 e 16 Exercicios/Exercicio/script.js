let num = document.getElementById ('fnum');
let lista = document.getElementById ('flista');
let res = document.getElementById('res');
let valores = []


function isNumero(n) { 
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1){ 
        return true
    } else { 
        return false
    }
}

function adicionar() { 
    if(isNumero(num.value) && !inLista(num.value, valores)){
         valores.push(Number(num.value))
         let item = document.createElement('option')
         item.text = `O valor ${num.value} foi adicionado!`
         lista.appendChild(item)
         res.innerHTML = ""
         
    }  else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ""
    num.focus()
    
}

function finalizar (){ 
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
            for(let pos in valores){
                   soma += valores[pos]
                if(valores[pos] > maior)
                    maior = valores[pos]
                if(valores[pos] < menor)
                    menor = valores[pos]                
            }

        media = soma / total;

        res.innerHTML = `<p> Ao todo, temos <strong>${total}</strong> números cadastrados. </p>`
        
        res.innerHTML += `<p> O Maior número listado foi <strong>${maior}</strong></p>`

        res.innerHTML += `<p> O Menor número listado foi <strong>${menor}</strong></p>`

        res.innerHTML += `<p> A Soma de todos os valores é ${soma}`

        res.innerHTML += `<p> A Media dos valores é ${media}`
        
    }
}

function limpar () { 
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
}