import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first_ang';
  newToDo = '';
  allToDos: string[] = [];

  errorMessage = '';
  addToDo() {
    if (!this.newToDo) {
      this.errorMessage = "Todo can't be empty";
      return;
    }
    this.errorMessage = '';
    this.allToDos.push(this.newToDo);
    console.log(this.allToDos);

    this.newToDo = '';
  }
  onInput(toDo: string) {
    this.newToDo = toDo;
    console.log(this.newToDo);
  }
  removeToDo(toDo: string) {
    this.allToDos = this.allToDos.filter((item) => item != toDo);
  }
}
