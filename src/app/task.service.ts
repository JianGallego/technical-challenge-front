import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from "./model/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl: string = 'localhost:8080/task';
  
  readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  save(task: Task): Observable<Task> {
    console.log("LLEGO AL SAVE", task)
    return this.http.post<Task>(this.baseUrl, task, {headers: this.headers});
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.baseUrl}/${task.id}`, task, {headers: this.headers}
    );
  }

  delete(id: string): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }
}