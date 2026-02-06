//Agora um pouco mais real:
//Crie uma struct car com:
//brand
//year
//currentYear (2026)
//Método:
//isNew() →
//se year >= currentYear - 5 → "New car"
//senão → "Old car"
//📌 Use this e condiçao.

const car = {
    brand : prompt("Qual a marca"),
    year : prompt("Qual o ano"),
    currentYear : "2026",
    isNew(){
        if(this.year >= this.currentYear -5){
            return console.log("New car");
        }
        else{
            return console.log("Old car");
        }
    }
 }

 isNew();

//-------------------------------------Corrigido codigo-------------------------------------------------------------------------------------//
 const car = {
  brand: prompt("Qual a marca"),
  year: Number(prompt("Qual o ano")),
  currentYear: 2026,

  isNew() {
    if (this.year >= this.currentYear - 5) {
      console.log("New car");
    } else {
      console.log("Old car");
    }
  }
};

car.isNew();