import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Task } from '../models/task.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Content-Length,Content-Range',
  'Access-Control-Expose-Headers': 'Content-Length,Content-Range' 
})
};

@Injectable()
export class TaskService {

  private headers:Headers;
  private options:RequestOptions;

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/task-api/api';

  public getTasks() {
    return this.http.get<Task[]>(this.userUrl);
  }

  public getTask(id) {
    return this.http.get<Task>(this.userUrl + "/"+ id);
  }

  public deleteTask(task) {
    return this.http.delete(this.userUrl + "/"+ task.id);
  }

  public createTask(task) {
    return this.http.post<Task>(this.userUrl, task);
  }

  public saveTask(task) {
    return this.http.put<Task>(this.userUrl + "/"+ task.id, JSON.stringify(task), httpOptions);
  }

}
