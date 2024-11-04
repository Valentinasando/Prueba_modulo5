/*Bloque rojo*/


let personajeActual = 1;
let cargandoPersonaje = false;
const personajesPrincipales = document.querySelector('.personajes-principales');
const contenedorPersonajesPrincipales = document.getElementById('personajes-protagonicos');

personajesPrincipales.addEventListener('mouseenter', async () => {
  if (personajeActual > 5 || cargandoPersonaje) return;
  cargandoPersonaje = true;
  const respuesta = await fetch(`http:swapi.dev/api/people/${personajeActual}/`);
  const datos = await respuesta.json();
  const personaje = datos;
  const html = `

        <div class= "card personaje" style="width: 14rem; m-2">
 
            <div class="">
              <div class=" m-2 rojo"></div>
            </div>

            <div class="card-body">

            <h5>${personaje.name}</h5>
            <p>Altura: ${personaje.height} cm</p>
            <p>Peso: ${personaje.mass} kg</p>
              
            </div>

        </div>
   
  `;
  contenedorPersonajesPrincipales.insertAdjacentHTML('beforeend', html);
  personajeActual++;
  cargandoPersonaje = false;
});


/*Bloque verde*/

let personajeActualSecundario = 6;
let cargandoPersonajeSecundario = false;
const personajesSecundarios = document.querySelector('.personajes-secundarios');
const contenedorPersonajesSecundarios = document.getElementById('personajes-secundarios');

personajesSecundarios.addEventListener('mouseenter', async () => {
  if (personajeActualSecundario > 10 || cargandoPersonajeSecundario) return;
  cargandoPersonajeSecundario = true;
  const respuesta = await fetch(`http:swapi.dev/api/people/${personajeActualSecundario}/`);
  const datos = await respuesta.json();
  const personaje = datos;
  const html = `

     <div class= "card personaje" style="width: 14rem; m-2">

        <div class="">
          <div class=" m-2 verde"></div>
        </div>

        <div class="card-body personaje-secundario">

        <h5> ${personaje.name}</h5>
        <p>Altura: ${personaje.height} cm</p>
        <p>Peso: ${personaje.mass} kg</p>
          
        </div>

    </div>
  `;
  contenedorPersonajesSecundarios.insertAdjacentHTML('beforeend', html);
  personajeActualSecundario++;
  cargandoPersonajeSecundario = false;

});

/*Bloque celeste*/

let personajeActualOtros = 11;
let cargandoPersonajeOtros = false;
const otrosPersonajes = document.querySelector('.otros-personajes');
const contenedorOtrosPersonajes = document.getElementById('otros');

otrosPersonajes.addEventListener('mouseenter', async () => {
  if (personajeActualOtros > 15 || cargandoPersonajeOtros) return;
  cargandoPersonajeOtros = true;
  const respuesta = await fetch(`http:swapi.dev/api/people/${personajeActualOtros}/`);
  const datos = await respuesta.json();
  const personaje = datos;
  const html = `

  <div class= "card personaje" style="width: 14rem; m-2">

        <div class="">
          <div class="m-2 celeste"></div>
        </div>

        <div class="card-body otro-personaje">

        <h5> ${personaje.name}</h5>
        <p>Altura: ${personaje.height} cm</p>
        <p>Peso: ${personaje.mass} kg</p>
          
        </div>

    </div>

  `;
  contenedorOtrosPersonajes.insertAdjacentHTML('beforeend', html);
  personajeActualOtros++;
  cargandoPersonajeOtros = false;
});







  
  



















