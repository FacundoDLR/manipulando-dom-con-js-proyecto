( () => {

const btn = document.querySelector('[data-form-btn]'); //Seleccionamos el boton del form

const createTask = (evento) => {
    evento.preventDefault(); // Evitamos el reseteo por defecto al presionar el boton del form
    const input = document.querySelector("[data-form-input]"); //Capturamos el input dentro del form.
    const value = input.value; //capturamos el valor del input 
    input.value = ''; //Luego de agregar la tarea dejamos el campo del input vacio
    const list =  document.querySelector('[data-list]'); //Seleccionamos el ul
    const task = document.createElement('li'); //creamos un li dentro de [data-list]
    task.classList.add('card');
    //backticks ``
    const taskContent = document.createElement('div'); //Creamos un elemento del tipo div
    taskContent.appendChild(checkComplete()); // Agregamos a checkComplete (checkbox) como hijo de taskContent (div)
    const titileTask = document.createElement('span'); //Creamos un elemento del tipo span
    titileTask.classList.add('task'); // agregamos la clase al titletask (span)
    titileTask.innerText = value; //Luego le agregamos el valor de contenido (texto) al span (titleTask)
    taskContent.appendChild(titileTask); // Agregamos a titleTask (span) como hijo de taskContent (div)
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`
   // task.innerHTML = content; //agrergamos el contenido dentro del task
    task.appendChild(taskContent); 
    list.appendChild(task); //Agregamos un li (hijo) dentro del ul (padre)
}
//Usando Arrow function o funciones anonimas
btn.addEventListener('click', createTask);
//Creamo funcion anonima para el checkbox del formulario
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};
// Inmediatly invoked function expression (IIFE), es decir funciones que en cuanto se declaran se ejecutan
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon')
    element.classList.toggle('far');
};

}) ();