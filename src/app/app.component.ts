import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done?? O_O';
  background = 'green';
  get todos() {
    // switch (this.selectedStatus) {
    //   case 'Active':
    //     return this.dataService.todos.filter(x => !x.isCompleted);
    //   case 'Completed':
    //     return this.dataService.todos.filter(x => x.isCompleted);
    //   default:
    //     return this.dataService.todos;
    // }
    return this.dataService.todos.filter(this.displayStatusFuncs[this.selectedStatus]);
  }
  get itemLeft() {
    return this.dataService.todos.filter(x => !x.isCompleted).length;
  }
  displayStatus = ['All', 'Active', 'Completed'];
  displayStatusFuncs = {
    Completed: (x: any) => !x.isCompleted,
    Active: (x: any) => x.isCompleted,
    All: (x: any) => true,
  };
  selectedStatus = 'All';
  todoValue = '';

  constructor(private dataService: DataService) {}

  newTodo(inputElement) {
    this.dataService.newTodo(inputElement.value);
  }

  removeTodo(idx, todo) {
    this.dataService.removeTodo(idx, todo);
  }

  complteAll() {
    this.dataService.complteAll();
  }

  clearAllComplete() {
    this.dataService.clearAllComplete();
    this.selectedStatus = 'All';
  }
}
