// Array é um objeto e objeto é um objeto.

let amigo = {nome:'José',
     sexo:'M',
      peso: 80.00,
       engordar(p=0){
        console.log(`${this.nome} Engordou ${p} kg`)
        this.peso += p
       }}

amigo.engordar(2.5)
console.log(`Meu amigo ${amigo.nome}, de sexo: ${amigo.sexo} pesa ${amigo.peso} Kg`)
