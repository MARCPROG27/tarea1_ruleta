let premios=[
    "VIAJE",
    "TELEVISOR DE 55 PULGADAS",
    "LAVADORA",
    "MAZDA CX5",
    "100000 PESOS"

];

function* premiosalazar(vector){
         return vector[Math.floor(Math.random()*vector.length)]
   
    }

     
         const premiacionobtenido=premiosalazar(premios).next().value; //GUARDA EN UNA CONSTANTE EL PREMIO QUE RECIBIRA EL USUARIO A LO LARGO DEL JUEGO



           console.log("USTED PODRIA GANAR EL SIGUIENTE PREMIO: "+premiacionobtenido);

           let i=0;
           let contador=2;

            while(i<3){
              let pregunta=confirm("DESEA TIRAR LA RULETA?");
              if(pregunta) {
             let valor=premiosalazar(premios).next().value; 

             //COMPARA EL VALOR ARROJADO AL AZAR POR LA RULETA CON LA CONSTANTE; EN CASO QUE SEA GANADOR SALE DEL CICLO WHILE
            // EN CASO DE QUE PIERDA TIENE OTROS 2 INTENTOS
      if(valor===premiacionobtenido){
          console.log("USTED HA GANADO EL PREMIO ESCOGIDO "+premiacionobtenido+" ES IGUAL A "+valor+"\n");
         console.log("USTED SALIO DE LA RULETA, FELICITACIONES...!")
         alert("FELICITACIONES USTED GANÓ UN "+valor);
         break;
            }else{
        //EN ESTE BLOQUE VERIFICA LOS NO ACIERTOS DEL USUARIO Y LOS INTENTOS QUE LE QUEDAN//
          console.log("USTED NO ACERTO"+"\n"+"LE QUEDAN " +contador+" INTENTO(S)."+"\n"+"SU PREMIO ESCOGIDO EN LA RULETA "+premiacionobtenido+" ES DIFERENTE A "+valor);
          alert("USTED NO ACERTO"+"\n"+"LE QUEDAN " +contador+" INTENTO(S)."+"\n"+"SU PREMIO ESCOGIDO EN LA RULETA "+premiacionobtenido+" ES DIFERENTE A "+valor);
         contador=contador-1;  
    
         }
          i=i+1;
       }else{
           console.log("USUARIO CANCELO JUEGO");
           break;
       }     
   
     
}
