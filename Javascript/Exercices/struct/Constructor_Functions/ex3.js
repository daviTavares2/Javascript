//Agora vamos adicionar método.

//👉 Faça isso:

//Crie um método greet() dentro do constructor que mostre:

//Hi, my name is Davi and I am 19 years old



function Int(name,age){
    
    this.name = name;
    this.age = age;
    
    this.greet = function(){
        console.log("Hi my name is "+this.name+" and i am "+this.age+" years old");
    };

}
let pessoa1 = new Identidade("Davi",19);

pessoa1.greet()