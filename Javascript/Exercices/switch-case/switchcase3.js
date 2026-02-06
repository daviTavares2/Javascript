//"A" → "Excellent"

//"B" → "Good"

//"C" → "Average"

//"D" → "Poor"

//"F" → "Fail"

//default → "Invalid grade"


let grade = prompt("Digite a  grade");

switch(grade){
    case "A": console.log("Excellent");
    break;
    case "B": console.log("Good");
    break;
    case "C": console.log("Average");
    break;
    case "D": console.log("Poor");
    break;
    case "F": console.log("Fail");
    break;
    default: console.log("Invalido");

}