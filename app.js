import { agregarTarea, obtenerTareas} from "./TaskManager.js";



function  mostrarTareas () {
    const tareas = obtenerTareas();

    tareas.forEach(tarea => {
        console.log(`Tarea= id${tarea.id}, descripcion: ${tarea.descripcion}, completada: ${tarea.completada}`);
    });
}

//mostrarTareas();


