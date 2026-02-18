function Identity(name,age,education,job){
    this.name = name;
    this.age = age;
    this.education = education;
    this.job = job;
    this.greet = function(){
        console.log("Hi my name is "+this .name+" and i have "+this.age+" years old i am a " +this.education+ " and im work with "+this.job);
        
    }
}
let pessoa1  =  new Identity("davi",19, "IT" , "Software enginner");
pessoa1.greet();