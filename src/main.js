import './style.css'
import { agregarTarea, obtenerTareas, completarTarea, eliminarTarea } from "./TaskManager.js";


import tarea from '/tarea.svg'



document.querySelector('#app').innerHTML = `
  <div>
     <h1>Gestor de Tareas</h1>
     <img src="${tarea}" class="logo" alt="Vite logo" />
        <div class="controls">
            <button id="crear-tarea">Crear Tarea</button>
            <button id="mostrar-tareas">Mostrar Tareas</button>
            <button id="limpiar-consola">Limpiar Consola</button>
        </div>
        
        <div id="tareas-container">
            <!-- Aquí se mostrarán las tareas -->
        </div>
        
        <div class="console" id="console">
            
        </div>
  </div>

`

const logConsola = (mensaje) => {
  const consoleElement = document.getElementById('console');
  consoleElement.innerHTML += `${mensaje}`;
  consoleElement.scrollTop = consoleElement.scrollHeight;
}

const limpiarConsola = () =>{
  const consoleElement = document.getElementById('console');
  consoleElement.innerHTML = "";
  consoleElement.scrollTop = consoleElement.scrollHeight;
}


const crearTarea = () => {
  const tarea = {
    id: 5,
    descripcion: "Tarea nueva",
    completada: false
  }
  agregarTarea(tarea);
}


const mostrarTareas = () => {

  limpiarConsola();
  const tareas = obtenerTareas();
  

  tareas.forEach(tarea => {
    logConsola(`<div class="tarea-item" data-id="${tarea.id}">Tarea= id:${tarea.id}, descripción: ${tarea.descripcion}, completada: ${tarea.completada}&emsp;&emsp;
      <button class="completar-btn">Marcar Completada</button>
      <button class="destruir-btn">Eliminar tarea</button>
      </div>`);
  });
}


const marcarCompletada = (id) => {
  completarTarea(id);
}


const destruirTarea = (id) => {
  eliminarTarea(id);
}

document.querySelector('#mostrar-tareas').addEventListener('click', mostrarTareas);
document.querySelector('#limpiar-consola').addEventListener('click', limpiarConsola);
document.querySelector('#crear-tarea').addEventListener('click', crearTarea);


document.getElementById('console').addEventListener('click', (event) => {
  if (event.target.classList.contains('completar-btn')) {
    const tareaId = event.target.closest('.tarea-item');
    const id = parseInt(tareaId.dataset.id);
    marcarCompletada(id);
    mostrarTareas();
  }
  if (event.target.classList.contains('destruir-btn')) {
    const tareaId = event.target.closest('.tarea-item');
    const id = parseInt(tareaId.dataset.id);
    destruirTarea(id);
    mostrarTareas();
  }
});
