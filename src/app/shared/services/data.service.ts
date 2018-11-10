import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [];
  constructor() {}

  newTodo(todoName) {
    const todo: Todo = { name: todoName, isCompleted: false };
    this.todos.push(todo);
  }

  removeTodo(idx, todo) {
    this.todos.splice(idx, 1);
  }

  complteAll() {
    this.todos.map(x => (x.isCompleted = !x.isCompleted));
  }

  clearAllComplete() {
    this.todos.map(x => (x.isCompleted = false));
  }
}
