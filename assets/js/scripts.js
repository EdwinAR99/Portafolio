//Funcion que aplica el estilo a la opcion seleccionada en el menu responsivo
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  opciones[5].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez se ha seleccionado
  var x = document.getElementById("nav");
  x.className = "";
}

//Funcion que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className == "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//Evento para cambiar el color de la opcion en el nav
document.addEventListener("DOMContentLoaded", function () {
  // Obtén todas las secciones de tu página
  const sections = document.querySelectorAll("section");

  // Función para determinar la sección visible
  function detectVisibleSection() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollBottom = scrollPosition + windowHeight;
  
    let maxVisibleArea = 0;
    let mostVisibleSection = null;
  
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      
      // Calcular el área visible de la sección
      const visibleTop = Math.max(sectionTop, scrollPosition);
      const visibleBottom = Math.min(sectionBottom, scrollBottom);
      const visibleHeight = visibleBottom - visibleTop;
      
      if (visibleHeight > maxVisibleArea) {
        maxVisibleArea = visibleHeight;
        mostVisibleSection = section;
      }
    }
  
    if (mostVisibleSection) {
      // La sección con el área más grande visible es la más visible
      const sectionId = mostVisibleSection.id;
      
      // Encuentra el enlace correspondiente con el atributo href
      const link = document.querySelector(`#links a[href="#${sectionId}"]`);
      
      if (link) {
        // Llama a la función seleccionar(link)
        seleccionar(link);
      }
    }
  }

  // Agrega un evento scroll para llamar a la función
  window.addEventListener("scroll", detectVisibleSection);

  // Llama a la función una vez al cargar la página para determinar la sección inicial
  detectVisibleSection();
});
