import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));

/* el primer argumento del callback dle foreach está llamando al crearTodoHatml y el argumento que mandamos es el mprimeor del forEach */
todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClaseTodo();
// newTodo.imprimirClaseTodo();

console.log('todos', todoList.todos);


// console.log(todoList.todos);

// todoList.

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// tarea.completed = true;

// console.log(TodoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);
