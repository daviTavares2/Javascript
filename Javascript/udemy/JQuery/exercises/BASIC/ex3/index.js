$(document).ready(function(){
    const  li = $("li");

    li.on("mouseenter",function(){
        let conteudo = $(this);
        conteudo.css("background-color", "black");
        conteudo.css("color","white");
    })
    
    li.on("mouseleave",function(){
        let conteudo = $(this);
        conteudo.css("background-color","white")
        conteudo.css("color","black");
    })
})

//💡 Dica de "Código Limpo":
//Em vez de escrever conteudo.css(...) duas vezes, podes passar um "objeto" com todas as mudanças de uma vez só:

//item.css({ "background-color": "black", "color": "white" });
//(Fica a dica para o teu próximo nível!)