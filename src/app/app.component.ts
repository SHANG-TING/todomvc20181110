import { Component } from '@angular/core';

export interface Todo {
  name: string;
  checked: boolean;
  completed: boolean;
  isEdit: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done?? O_O';
  background = 'green';
  todos: Todo[] = [];
  get totalCount() {
    return this.todos.filter(x => x.checked).length;
  }
  todoValue = '';

  newTodo(inputElement) {
    const todo: Todo = {
      name: inputElement.value,
      checked: false,
      completed: false,
      isEdit: false,
    };
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  selectAll() {
    this.todos.map(x => (x.checked = true));
  }

  clearComplete() {
    this.todos.map(x => (x.completed = false));
  }

  onActive() {
    this.todos.filter(x => x.checked).map(x => (x.completed = false));
  }

  onComplete() {
    this.todos.filter(x => x.checked).map(x => (x.completed = true));
  }
}
