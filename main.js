
   function stop() {

    window.alert('STOP'); 
  }

   function timbre() {

     var timbre = document.getElementById("Timbre");
     timbre.play();
   }   

   function moverAscensor(piso) {   
     const Ascensor = document.getElementById("Ascensor");            
        cerrarPuerta();

     const pixelPisos = 80; // Altura de cada piso en píxeles
     const pisoDestino = piso * pixelPisos;
     Ascensor.style.bottom = pisoDestino + "px";    
         
     setTimeout(abrirPuerta, 3000);
  }   
      
   function cerrarPuerta() {
             const cerrar = document.getElementById("Ascensor");
             cerrar.style.backgroundColor = "gray";
        }
   
   function abrirPuerta() {
             const abrir = document.getElementById("Ascensor");
             abrir.style.backgroundColor = "Yellow";
  }



