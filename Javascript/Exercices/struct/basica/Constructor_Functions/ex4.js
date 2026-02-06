//Crie uma constructor function chamada Car que:
//receba brand e year
//crie um método isNew()
//o método deve imprimir no console se o carro é New car ou Old car
//crie dois carros diferentes
//chame o método para os dois

function Car(brand,year){
    this.brand = brand;
    this.year = year;
    
    this.isNew = function(){
        if(this.year > 2019){
            console.log("new car");
        }else{
            console.log("old car");
        } 
    }
}
let pessoa1 =  new Car("bmw",2020);

pessoa1.isNew();

//----------------------------------------CORREÇAO ---------------------------------------------
function Car(brand, year) {
    this.brand = brand;
    this.year = year;

    this.isNew = function() {
        if (this.year > 2019) {
            console.log("New car");
        } else {
            console.log("Old car");
        }
    };
}

let car1 = new Car("BMW", 2020);

car1.isNew();