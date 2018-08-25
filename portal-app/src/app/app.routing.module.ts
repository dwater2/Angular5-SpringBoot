import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './task/task.component';
import {AddTaskComponent} from './task/add-task.component';

const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'edit/:id', component: AddTaskComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
