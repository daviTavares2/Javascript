$(document).ready(function(){
    
    const input = $("input");
    const h1 = $("h1");
    
    input.on("input",function(){
        let currentText = $(this).val();
        let count = currentText.length;
        
        if(count > 8){
        h1.text("Strong password");
        h1.css("color","green");
        h1.addClass("sucess");

        }else if(count < 8  || count === 8 ) {
        h1.text("Too Short");
        h1.css("color","red");

            if(h1.hasClass(("sucess")))
                h1.remove("sucess");
            }
    })
})