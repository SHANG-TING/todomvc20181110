import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done?? O_O';

  onKey(event, inputElement) {
    if (event.code === 'Enter') {
      console.log(inputElement.value);
    }
  }
}
