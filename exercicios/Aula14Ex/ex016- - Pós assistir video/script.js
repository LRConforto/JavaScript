//length = comprimento, quantas letras tem dentro

function contar () { 
    let start  = document.querySelector('#start').value;
    let end = document.querySelector('#end').value;
    let step = document.querySelector('#step').value;

    let res = document.getElementById('msg');


    if(start.length === 0 || end.length ===0 || step.length ===0){
        window.alert("Erro, valores invalidos.")
    } else { 
        res.innerHTML = 'Contando:<br> '

        //transformar as variaveis em Numero
        let s = Number(start);
        let e = Number(end);
        let st = Number(step);

        if(st == 0){ 
            window.alert("Erro, o PASSO não pode ser calculado com 0, então ele vai ser considerado 1.")
            st = 1;
        }

        if(s < e){
            //contador crescente
                for(i = s; i <= e; i += st){
                res.innerHTML += `${i} 👉`           
            }       
        } else if (s > e ) { 
             //contador descrescente
            for(i = s; i >= e; i-= st){
                res.innerHTML += `${i} 👉`
            }
        }

        res.innerHTML += `🏁`
    }
}
