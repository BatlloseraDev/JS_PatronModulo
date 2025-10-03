const tareas = [
    {id:1, descripcion: "Tarea 1", completada: false},
    {id:2, descripcion: "Tarea 2", completada: false},
    {id:3, descripcion: "Tarea 3", completada: false},
    {id:4, descripcion: "Tarea 4", completada: false}
];

export function agregarTarea(tarea) {
    tareas.push(tarea);
}


export function obtenerTareas() {
    return tareas;
}
export function completarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);    
    if(index !== -1)tareas[index].completada  = true;
    else console.log("Tarea no encontrada");

}


export function eliminarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) tareas.splice(index, 1);
    else console.log("Tarea no encontrada");
   
}