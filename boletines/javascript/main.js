links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
     link.addEventListener("click",function(ev){
        ev.preventDefault();
        let links = document.querySelector('.close');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su saludo fadeOutUp
        content.classList.add("animate__fadeInDownfadeOutUp");
        content.classList.add("animate__animated");

     return false;
    });
});
