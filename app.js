import { agregarTarea, obtenerTareas, completarTarea } from "./TaskManager.js";



const mostrarTareas = () => {
    const tareas = obtenerTareas();

    tareas.forEach(tarea => {
        console.log(`Tarea= id${tarea.id}, descripcion: ${tarea.descripcion}, completada: ${tarea.completada}`);
    });
}


const marcarCompletada = (id) => {
    completarTarea(id);
}


//mostrarTareas();

// marcarCompletada(5);

// mostrarTareas();
