//Crie uma variável month (1 a 12) e mostre:

//12, 1, 2 → "Summer"

//3, 4, 5 → "Autumn"

//6, 7, 8 → "Winter"

//9, 10, 11 → "Spring"

//default → "Invalid month"

//💡 Aqui você aprende um truque importante do switch.

let month = prompt("Digite o numero do mês (1 a 12)");
    switch(month){
        case 1:
        case 2:
        case 12: 
        console.log("Summer");
        break;

        case 3:
        case 4:
        case 5:
        console.log("Autumn");
        break;

        case 6:
        case 7:
        case 8:
        console.log("Winter");
        break;

        case 9:
        case 10:
        case 11:
        console.log("Spring");
        break;

        default: console.log("invalid month")

    }