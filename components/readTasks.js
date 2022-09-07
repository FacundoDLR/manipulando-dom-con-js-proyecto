import { createTask } from "./addTask.js";

export const readTasks = () => {
    const list = document.querySelector('[data-list]'); //aquí seleccionamos la lista a la cual nosotros vamos a querer agregar nuestras tareas que ya tenemos almacenadas
    console.log(list);

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

    taskList.forEach((task) => {
        list.appendChild(createTask(task));
    });
};

//Aquí estamos de nuevo tomando la información que ya está almacenada en nuestro localStorage. Y por último, lo que vamos a hacer es recorrer este arreglo. Recuerda que para que tú puedas recorrer un arreglo, puedes utilizar diferentes métodos. Ahorita estamos utilizando forEach, pero también puedes hacerlo con for.

//Y pues bueno, al final de cuenta lo que vamos a recibir aquí como primer parámetro de nuestra arrow function es la tarea, cada una de las tareas que existen o cada uno de los elementos que existen dentro de nuestro arreglo.

//Le vamos a mandar este formato o esa tarea, que tiene un formato de objeto, que tiene tanto la llave value como la llave dateFormat, y lo mandamos entonces a nuestra función createTask que nos va a regresar toda la estructura HTML, con clases, todo, ya definido y lo último que vamos a hacer entonces es irlo agregando a nuestra lista.