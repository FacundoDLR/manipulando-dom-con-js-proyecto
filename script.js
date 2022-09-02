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
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content; //agrergamos el contenido dentro del task
    
    list.appendChild(task);
    
    console.log(content);
}

console.log(btn);

//Usando Arrow function o funciones anonimas
btn.addEventListener('click', createTask);