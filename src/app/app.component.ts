import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Todolist';

  constructor() {

  }

  changeTitle(name:string):void {
    this.title = "title"
  }

}
