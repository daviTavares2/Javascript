//Your Goal:
//Write the jQuery code to do the following:

//Target all <h1> elements.

//Check if the <h1> has the class "active".

//If it does NOT have it:
//Add the class "active".
//Change the CSS color to "orange".

//If it ALREADY has it:
//Change the CSS color back to "black".

$(document).ready(function(){
    
    if($("h1").hasClass("active")){
        $("h1").css("color ","black");
    } else {
        $("h1").addClass("active");
        $("h1").css("color","orange")
    }
    
})