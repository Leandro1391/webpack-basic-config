import { Todo } from '../classes/todo.class';
import { todoList } from '../index.js';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const ulFilter = document.querySelector(".filters");
const buttonDelete = document.getElementById("buttonDeleteAllTasks");
const anchorFilters = document.querySelectorAll(".filtro");

export const crearTodoHtml = (todo) => {


    const htmlTodo = `
    <li class="${(todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

buttonDelete.addEventListener('click', (event) => {

    todoList.eliminarCompletados();
    // divTodoList.removeChild(todoElemento);

    for (let idx = divTodoList.children.length - 1; idx >= 0; idx--) {

        const element = divTodoList.children[idx];
        // console.log(element);
        if (element.classList.contains('completed'))
            divTodoList.removeChild(element);
    }
})

// Eventos
txtInput.addEventListener('keyup', (event) => {
    // console.log(event);


    if (event.keyCode === 13 && txtInput.value.length > 0) {

        // console.log(txtInput.value);
        const newTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(newTodo);

        crearTodoHtml(newTodo);
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (event) => {
    // console.log('click');
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    console.log(nombreElemento);
    // console.log(todoElemento);
    // console.log(todoId);

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);

    }

    console.log(todoList);


});

ulFilter.addEventListener('click', (event) => {

    // console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) { return; }

    anchorFilters.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');


    for (const element of divTodoList.children) {
        // console.log(element);
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado)
                    element.classList.add('hidden');
                break;
            case 'Completados':
                if (!completado)
                    element.classList.add('hidden');
                break;
            default:
                break;
        }
    }


})

