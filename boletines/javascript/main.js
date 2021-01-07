links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
     link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //Agregar clases para animar su saludo fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

     return false;
    });
});
