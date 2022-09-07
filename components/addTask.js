import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    evento.preventDefault(); // Evitamos el reseteo por defecto al presionar el boton del form

    const list =  document.querySelector('[data-list]'); //Seleccionamos el ul
    const input = document.querySelector("[data-form-input]"); //Capturamos el input dentro del form.
    const calendar = document.querySelector('[data-form-date]');
    
    const value = input.value; //capturamos el valor del input 
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    input.value = ''; //Luego de agregar la tarea dejamos el campo del input vacio
    calendar.value = '';

    const taskObj = { //generamos una constante, que es un objeto en el cual vamos a almacenar tanto value como dateFormat.
        value,
        dateFormat
    } //Creamos un objeto que contiene llave y valor, y que servirá para almacenar una serie de datos en el LocalStorage.
    
    const taskList = JSON.parse(localStorage.getItem('tasks'))  || []; //lo que tienes que entender es que, cuando nosotros ponemos estos pipelines lo que significa es, en caso de que esto que yo estoy escribiendo aquí sea null o indefinido, lo que voy a hacer es entonces formatearla o darle un valor por defecto, que en este caso sería mi arreglo vacío.
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList)); //La manera correcta de transformar los datos en string es a través de JSON.stringify y aprovechamos para utilizar el setItem para almacenar los datos localmente.
    
    const task = createTask(taskObj);
    list.appendChild(task); //Agregamos un li (hijo) dentro del ul (padre)
}

export const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li'); //creamos un li dentro de [data-list]
            task.classList.add('card'); //agregamos una clase llamada card
    //backticks ``
    const taskContent = document.createElement('div'); //Creamos un elemento del tipo div

    const titileTask = document.createElement('span'); //Creamos un elemento del tipo span
            titileTask.classList.add('task'); // agregamos la clase al titletask (span)
            titileTask.innerText = value; //Luego le agregamos el valor de contenido (texto) al span (titleTask)
            taskContent.appendChild(checkComplete()); // Agregamos a checkComplete (checkbox) como hijo de taskContent (div)
            taskContent.appendChild(titileTask); // Agregamos a titleTask (span) como hijo de taskContent (div)
    // task.innerHTML = content;           //agrergamos el contenido dentro del task
    const dateElement = document.createElement('span');
            dateElement.innerHTML = dateFormat;
            task.appendChild(taskContent);
            task.appendChild(dateElement); 
            task.appendChild(deleteIcon());
    return task;
}