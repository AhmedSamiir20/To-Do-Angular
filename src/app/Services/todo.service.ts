import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private httpClient: HttpClient) {}

  //get all todos
  getTodos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.apiUrl);
  }

  createTodo(todo: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(this.apiUrl, todo);
  }

  getTodoById(id: string): Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`);
  }

  update(todo: ToDo): Observable<ToDo> {
    //collection of items over time
    this.getTodoById;
    return this.httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
