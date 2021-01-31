import { crearTodoHtml } from "../js/componentes";

export class Todo {

    static fromJson({ id, tarea, competed, create }) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completed = competed;
        tempTodo.create = create;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completed = false;
        this.create = new Date();

    }

    imprimirClaseTodo() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}