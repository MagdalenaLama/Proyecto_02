/*
 La clase Preguntas tiene como propiedades título (string) y alternativas (arreglo de string). 
 La usaremos cuando el usuario ingrese la información
 Tiene el método mostrarPregunta() el cual es llamado cuando de realiza la encuesta.
*/

class Preguntas{
  constructor(titulo,alternativas){
      this.titulo = titulo,
      this.alternativas= alternativas
  }
  mostrarPregunta() {
      let preguntaConAlternativas = this.titulo + "\n";
      this.alternativas.forEach((alterna, index) => {
          preguntaConAlternativas += `${index + 1} - ${alterna}\n`;
      });
      return preguntaConAlternativas;
  }
  
}

/*
La clase Encuesta tiene como propiedad: encuesta que es un arreglo objetos que son instancias de la clase
Pregunta.
La usamos cuando el usuario ha terminado de agregar alternativas para una pregunta.
Contiene los métodos mostrarEncuesta(), el cual imprime en la consola el listado de preguntas con sus altenativas,
y el método realizarEncuesta(), el cual permite al usuario ver las preguntas de a uno, votar y ver los resultados en la consola.
*/
class Encuesta{
  constructor(pregu){
      this.encuesta = pregu;
  }

  mostrarEncuesta(){
      
      this.encuesta.forEach((element,index) => {
          console.log(`${index+1}: ${element.titulo}`);
          element.alternativas.forEach((alterna,index)=>{
              console.log(`${index+1}-${alterna}`)
          })
          
      });
              
      }
   realizarEncuesta(){
      for (let index = 0; index < this.encuesta.length; index++) {
          const preguntaActual = this.encuesta[index];
          const resp = prompt(preguntaActual.mostrarPregunta());
          console.log(`La respuesta a la pregunta "${preguntaActual.titulo}" es: ${resp}`);
      
      }
                    
    }
}   
          




  alert ("Iniciando encuesta")
  let totalPreguntas;
  do {
       totalPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá su encuesta?"))
      if (totalPreguntas<2) {
          alert("Su encuenta debe contener un  mínimo de 8 pregunta. Vuelva a empezar")
      }
      
  } while (totalPreguntas<2);
  
  let i=0;
  encuesta =[]
  while (i<totalPreguntas) {
  alternativas = []
  titulo = prompt(`Ingrese la pregunta: ${i+1}`)
          
  do { 
  const alt=prompt ("Ingrese una alternativa o fin para terminar") 
      if (alt.toLowerCase()=== "fin") {
         break        
         } else{
           alternativas.push(alt)
          }
          } while (true);
          i++
         pregunta = new Preguntas(titulo,alternativas)
         encuesta.push(pregunta)
      }

const encuesta1 = new Encuesta(encuesta);

let accion;
do {
  accion= parseInt(prompt(`Eliga una opción:
      1) Realizar encuesta
      2) Ver encuesta`))
      
  if (accion===2) {
      let x = encuesta1.mostrarEncuesta()
      console.log(x)
  } else if (accion === 1) {
       encuesta1.realizarEncuesta()
       break
      
  } else {
      alert("Opción inválida")
      
  }
  
} while (true);

alert("Gracias por participar")
  
