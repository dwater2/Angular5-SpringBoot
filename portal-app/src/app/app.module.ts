import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { AppRoutingModule } from './app.routing.module';
import {TaskService} from './task/task.service';
import {HttpClientModule} from "@angular/common/http";
import {AddTaskComponent} from './task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
