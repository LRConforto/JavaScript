function gerar (){
    let n =  document.querySelector('#num').value;
    let table = document.querySelector('#table');
    let msg = document.querySelector('#msg');

    if (n.length == 0){ 
        window.alert('ERRO, digite um número.')
    } else {     
        n = Number(n);
        let x = 0;
        table.innerHTML = '';
  
        for (let i = x; i <= 10; i++){
            let option = document.createElement('option')  
            option.text += `${n} x ${i} = ${n * i}`
            option.value = `${i+1}`
            table.appendChild(option)
        }
    
    msg.style.display = "none"
    table.style.display = "block"   
    }
}