import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../models/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-user',
  templateUrl: './task.component.html',
  styles: []
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe( data => {
        this.tasks= data;
      });
  };

  editTask(task: Task): void {
    this.router.navigate(['/edit', task.id]);

  };

  deleteTask(task: Task): void {
    if(confirm("Deseja realmente excluir esse registro?")){
      this.taskService.deleteTask(task)
        .subscribe( data => {
          this.tasks = this.tasks.filter(u => u !== task);
        })
    } 
  };

  onFilterChange(eve: any, task: Task) {
    task.status = eve;
    this.taskService.saveTask(task)
    .subscribe( data => {
      alert("Tarefa atualizada com sucesso!");
      this.router.navigate(['tasks']);
      task = data;
    });
  }

}


