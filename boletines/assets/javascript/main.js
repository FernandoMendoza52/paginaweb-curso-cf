// obtener los elementos de la clase .close

let link = document.querySelectorAll(".close");

// recorreslos

links.forEach(function (link){

  //agregar un evento click a cada uno de ellos -case sensitive
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

// quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animate");

//agregar la clase de animacion su salida fadeOutUp
    content.classList.add("fadeOutUp"); 
    content.classList.add("animate");

    setTimeout(function(){
      location.href = "/"
    },600000);

    return false;

  });

});
