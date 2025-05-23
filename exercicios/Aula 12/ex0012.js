//Quero dar bom dia, boa tarde, boa noite!
var data = new Date();
var horas = data.getHours();

console.log(`Agora são exatamente ${horas} horas.`)

if (horas >= 6 && horas < 12 ) { 
    console.log("Bom Dia!!!")
} else if (horas <= 5 || horas >= 18){ 
    console.log("Boa Noite!!!")
} else { 
    console.log("Boa Tarde!!!")
}