$(document).ready(function () {


  //SLIDER
  $(document).ready(function () {
    $('#sliderImgs').bxSlider();
  });

  //POST DINAMICOS
  var posts = [

    {
      title: "ARTICULO 1",
      date: new Date(),
      content: "HOY SE AVANZO EN EL PROYECTO"
    },
    {
      title: "ARTICULO 2",
      date: new Date(),
      content: "HOY SE AVANZO EN EL PROYECTO"
    },
    {
      title: "ARTICULO 3",
      date: new Date(),
      content: "HOY SE AVANZO EN EL PROYECTO"
    },
    {
      title: "ARTICULO 4",
      date: new Date(),
      content: "HOY SE AVANZO EN EL PROYECTO"
    },

  ];

  posts.forEach((item, index) => {
    var post =
      `<article class="articulosDinamicos">
      <h1> ${item.title} </h1>
      <button id="buttonPost">COMENTARIOS</button>
      <h5> ${item.date}</h5>
      <p>  ${item.content}    </p>
      </article>`;

    $(".posts").append(post);
  });

 //ESTILOS
  var background = $("html");
  var button = $("#button-submit,#buttonPost");
  var titulo = $("#titulo")
  $("#botonRED").click(function () {

    $(background).css("background", "url(assets/img/rojo.jpg)", "no-repeat", "center", "center", "fixed");
    $(background).css("background-size", "cover");
    $(button).css("background-color", "red");
    $(titulo).css("background-image", "linear-gradient(270deg, #ffba00 0, #ffa900 8.33%, #ff9500 16.67%, #ff7e00 25%, #ff6200 33.33%, #ff4200 41.67%, #f81010 50%, #e4001f 58.33%, #d10029 66.67%, #c00031 75%, #b00039 83.33%, #a30041 91.67%, #97004b 100%)");
  });

  $("#botonBLUE").click(function () {

    $(background).css("background", "url(assets/img/cielo.jpg)", "no-repeat", "center", "center", "fixed");
    $(background).css("background-size", "cover");
    $(button).css("background-color", "blue");
    $(titulo).css("background-image", "linear-gradient(270deg, #bc84e8 0, #9a6ee1 16.67%, #6e5adb 33.33%, #1d47d4 50%, #0038cd 66.67%, #002fc7 83.33%, #002ac0 100%)");
  });

  $("#botonGREEN").click(function () {

    $(background).css("background", "url(assets/img/hojas.jpg)", "no-repeat" ,"center center", "fixed");
    $(background).css("background-size", "cover");
    $(button).css("background-color", "green");
    $(titulo).css("background-image", "radial-gradient(circle at 120.71% 50%, #a2ee64 0, #87e468 25%, #6cd86c 50%, #4fcc6f 75%, #2ec172 100%)");
  });

  //ANIMACION DE VOLVER AL INICIO
  $("#botonSUBIR").click(function(e){
    e.preventDefault();
       $("html,body").animate({
              scrollTop:0
       },500);
  });

  //FORMULARIO
  $("form").submit(function(){
    console.log("submit");
     var name = $("#nombre").val();
     localStorage.setItem("nombre",name);
     location.reload();
  });
  //AGREGAR A LOCALSTORAGE
  var name = localStorage.getItem("nombre");
  if(name == null){
    $("aside").append("NO SE HA REGISTRADO");
  }else{
    $("aside").append("Bienvenido "+name+"<br>");
    $("aside").append("<a href='#' id='logout'> CERRAR SESION</a>");

  };
   //SALIR
    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
    
     //RELOJ DINAMICO
    if(window.location.href.indexOf("reloj") >-1){

      setInterval(function(){
        var reloj=moment().format("h:mm:ss a");
        $("#reloj").html(reloj);
      },1000);
  
    };

});