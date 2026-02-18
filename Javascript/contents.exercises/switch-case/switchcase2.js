//Crie uma variável option:

//1 → "Create user"

//2 → "Edit user"

//3 → "Delete user"

//4 → "Exit"

//default → "Invalid option"


let menu = prompt("Digite a opção");

    switch(menu){
        case "1": console.log("Create user");
        break;
        case "2": console.log("Edit user");
        break;
        case "3": console.log("Delete user");
        break;
        case "4": console.log("Exit");
        break;
        default: console.log("Invalido!")
    }