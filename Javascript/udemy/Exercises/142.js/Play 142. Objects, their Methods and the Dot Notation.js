function HouseKeeper (yearsOfExperience, name , cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = function(){
        console.log("Cleaning")
    }

}
HouseKeeper.cleaningRepertoire();