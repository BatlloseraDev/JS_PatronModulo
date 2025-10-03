const tareas = [
    {id:1, descripcion: "Tarea 1", completada: false},
    {id:2, descripcion: "Tarea 2", completada: false},
    {id:3, descripcion: "Tarea 3", completada: false},
    {id:4, descripcion: "Tarea 4", completada: false}
];

export function agregarTarea(tarea) {
    tareas.push(tarea);
}