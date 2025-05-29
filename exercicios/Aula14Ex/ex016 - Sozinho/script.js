function contar () { 
    var start = Number(document.getElementById ('start').value);
    var step = Number(document.getElementById('way').value);
    var end = Number(document.getElementById('end').value);
    var res = document.querySelector('#msg');
    
    res.innerHTML = ''

    if(start <= 0 || step <= 0 || end <= 0) {
        window.alert("Preencha todos os campos com um valor válido! ⚠️")
    } else {
        
        let i = start;

        if(i < end){ 
            while(i <= end){ 
                res.innerHTML += `${i} 👉`
                i += step
            }
        } else if (i > end){ 
            while(i >= end){ 
                res.innerHTML += `${i} 👉`
                i -= step 
            }
        }

      res.innerHTML += "🏁"  
}

}
//👉
//🏁