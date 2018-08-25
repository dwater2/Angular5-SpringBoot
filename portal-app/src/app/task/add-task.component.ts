import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../models/task.model';
import { TaskService } from './task.service';

@Component({
  templateUrl: './add-task.component.html',
  styleUrls: ['./task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  titulo:string = "";

  constructor(private router: Router, private taskService: TaskService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(parametro=>{
      if(parametro["id"]==undefined){
        this.titulo = "Novo cadastro de Tarefa";
      }else{
        this.titulo = "Editar cadastro de Tarefa";
        this.taskService.getTask(Number(parametro["id"])).subscribe( res => this.task = res);
      } 
    });
  }

  saveTask(): void {
    if(this.task.id == undefined){
      this.taskService.createTask(this.task)
          .subscribe( data => {
            alert("Tarefa criada com sucesso!");
            this.router.navigate(['tasks']);
          });
      }else{
        this.taskService.saveTask(this.task)
        .subscribe( data => {
          alert("Tarefa atualizada com sucesso!");
          this.router.navigate(['tasks']);
        });
      }    
  };

}
