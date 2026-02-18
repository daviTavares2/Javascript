
//struct básica em js
const user = {
  name: "Davi",
  age: 19,
  country: "Brazil"
};


//Stuct + comportamento
const user = {
  name: "Davi",
  age: 19,
  greet() {
    console.log("Hi, my name is " + this.name);
  }
};

user.greet();

//modelo (pre-classes)

function createUser(name,age){
   return{
    name;
    age;
   }
}

const u1 = CreateUser("Davi",19);

//struct+array
const users = [
    {name:"Ana",age:22}
    {name:"Lucas",age:15}
    {name : "Davi",age:19}
]

//struct dinamica (muito js)
const product = {};

product.name = "Laptop";
product.price = 3000;
product.inStock= true;