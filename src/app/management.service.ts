import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  constructor(private todoService: TodoService) {}

  public countTodos(): Observable<number> {
    return this.todoService
      .getTodos()
      .pipe(map((todos: Todo[]) => todos.length));
  }
}
