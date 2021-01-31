import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        // console.log(filterTodoList);
        this.guardarLocalStorage();

    }

    marcarCompletado(id) {

        // this.todos.forEach(hacer => console.log(hacer.id, id));
        let findTodo = this.todos.find(todo => todo.id == id);

        // console.log(findTodo);
        findTodo.completed = !findTodo.completed;

        this.guardarLocalStorage();

    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completed)
        this.guardarLocalStorage();
    }


    //Local Storage
    guardarLocalStorage() {
        localStorage.setItem('data', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        // (localStorage.getItem('data')) ? this.todos = JSON.parse(localStorage.getItem('data')) : this.todos = [];
        this.todos = (localStorage.getItem('data'))
            ? JSON.parse(localStorage.getItem('data'))
            : [];

        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
    }


}