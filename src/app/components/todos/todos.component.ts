import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // delete in UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // delete in server
    this.todoService.deleteTodo(todo).subscribe();
  }

  // Add Todo
  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
