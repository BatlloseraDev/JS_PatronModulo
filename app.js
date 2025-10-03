import { agregarTarea, obtenerTareas, completarTarea, eliminarTarea} from "./TaskManager.js";


const crearTarea = () => {
    const tarea = {
        id: 5,
        descripcion: "Tarea nueva",
        completada: false
    }
    agregarTarea(tarea);
}


const mostrarTareas = () => {
    const tareas = obtenerTareas();

    tareas.forEach(tarea => {
        console.log(`Tarea= id${tarea.id}, descripcion: ${tarea.descripcion}, completada: ${tarea.completada}`);
    });
}


const marcarCompletada = (id) => {
    completarTarea(id);
}


const destruirTarea = (id) => {
    eliminarTarea(id);
}


mostrarTareas();

crearTarea();


mostrarTareas();

marcarCompletada(5);

mostrarTareas();

destruirTarea(5);

mostrarTareas();
