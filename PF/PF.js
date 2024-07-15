
alert("Iniciando encuesta")

/*Se declaran las siguientes variables, de las cuales, preguntas y alternativas serán tomadas
como valores para los parámetros de las funciones realizarEncuesta() y mostrarEncuesta() 
*/

let contador = 0
let preguntas =[];
let alternativas =[];
let seguir = true;

// Se pegunta al usuario por el número de preguntas que conformarán la encuenta.2
const numeroPreguntas = parseInt(prompt("Ingrese el número de preguntas que contiene su encuentas"));

 while(seguir){
    if (numeroPreguntas<8) {
        alert("La encuenta debe contener un mínimo de 8 preguntas.Refresque la página y vuelva a comenzar");
        break;
        
    } 
        const pregunta = prompt("Ingrese una nueva pregunta (o Fin para terminar)");
        if(pregunta.toLowerCase() === "fin"){
            if(contador===numeroPreguntas){
                seguir = false;
            break;

            } else{
                alert(`Faltan ${numeroPreguntas-contador} preguntas por ingresar `);
                continue;
            }
            
        } else {
            preguntas.push(pregunta);
            contador++;
    
        }
        
        let alternativasRespuesta = [];
        let respuesta;
    
        do {   
          respuesta = prompt("Ingrese una opción de respuesta (o Fin para terminar)"); 
    
        if(respuesta.toLowerCase() !== "fin"){
            alternativasRespuesta.push(respuesta);
    
        } 
    
    }   while (respuesta.toLowerCase() !== "fin");
        alternativas.push(alternativasRespuesta)
    
}
        
/*Para mostar y realizar la encuesta, se deben llamar a las respectivas funciones que toman como parametros
preguntas para pre, y alternativas para alt
*/


function realizarEncuesta(pre,alt){
    for (let index = 0; index < pre.length; index++) {
        const eleccion = prompt(`${pre[index]}:
            ${alt[index]}`)
        console.log(`La respuesta para la pregunta: ${pre[index]} con alternativas ${alt[index]} es :${eleccion}`);
        
    }
}

function mostrarEncuenta(pre,alt){
    for (let index = 0; index < pre.length; index++) {
        console.log(`Pregunta:${index+1}) ${pre[index]}
            `);
        for (let i = 0; i < alt.length; i++) {
            console.log(`${i+1}. ${alt[i]}
                `);
            
        }
        
    }
}
