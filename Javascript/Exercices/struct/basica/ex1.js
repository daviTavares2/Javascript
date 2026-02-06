//Crie uma struct chamada person com:

//name

//age

//city

//2️⃣ 
//o nome da pessoa
//a idade
//3️⃣ Atualize a idade somando +1

//4️⃣ Adicione uma nova propriedade:
//job
//5️⃣ Remova a propriedade:
//city

const person = {
    name:"Davi",
    age: 19,
    city:"Sp"
}

console.log(person.name);
console.log(person.age);

person.age++;
console.log("age updated", person.age);

person.job = "Web Developer";

delete person.city