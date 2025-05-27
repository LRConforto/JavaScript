function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('Nascimento')
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('Error: Preencha corretamente para obter o resultado!')
        return
    } else {
        var fsex = document.getElementsByName('Sexo');
        var idade = ano - fano.value;
        var genero = '';

        //Aqui em vez de eu criar um <img id=foto> pelo html eu to criando pelo JS. Basicamente isso.
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (!fsex[0].checked && !fsex[1].checked){
            window.alert('Você precisa selecionar um Genêro.')
            return
        } else if (fsex[0].checked){ 
            genero = 'Masculino'
            document.body.style.backgroundColor = 'rgb(70,142,236)'

            if(idade >= 0 && idade < 10 ){
                //Criança
                res.innerHTML = `É um <strong>Menino</strong> de <strong>${idade}</strong> anos.`
                img.src = 'bebe-menino.png'
                res.appendChild(img)
            } else if(idade < 21) {
                //Jovem
                res.innerHTML = `É um <strong>Jovem</strong> de <strong>${idade}</strong> anos`
                img.src = 'adolescente-homem.png'
                res.appendChild(img)
            } else if(idade < 50){
                //Adulto
                res.innerHTML = `É um <strong>Adulto</strong> de <strong>${idade}</strong> anos`
                img.src = 'homem-adulto.png'
                res.appendChild(img)
            } else { 
                //Idoso
                res.innerHTML = `É um <strong>Idoso</strong> de <strong>${idade}</strong> anos`
                img.src = 'homem-idoso.png'
                res.appendChild(img)
            }
        } else { 
            genero = 'Feminino'
            document.body.style.backgroundColor = 'rgba(214, 163, 171, 0.89)'

            if(idade <= 10){
                //Criança 
                res.innerHTML = `É uma <strong>Menina</strong> de <strong>${idade}</strong> anos`
                img.setAttribute('src', 'bebe-menina.png')
                res.appendChild(img)
            } else if (idade > 10 && idade < 21){
                //Jovem 
                res.innerHTML = `É uma <strong>Jovem</strong> de <strong>${idade}</strong> anos`
                img.setAttribute('src', 'menina-adolescente.png')
                res.appendChild(img)
            } else if (idade >= 21 && idade < 50){
                //Adulta
                res.innerHTML = `É uma <strong>Adulta</strong> de <strong>${idade}</strong> anos`
                img.setAttribute('src', 'mulher-adulta.png')
                res.appendChild(img)
            } else {
                //Idosa 
                res.innerHTML = `É uma <strong>Idosa</strong> de <strong>${idade}</strong> anos`
                img.setAttribute('src', 'mulher-idosa.png')
                res.appendChild(img)
            }
        }
    }

}