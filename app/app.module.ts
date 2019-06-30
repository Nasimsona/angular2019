import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {RouterModule} from '@angular/router';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MaterialModule } from './material/material.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

import {appRoutes} from './routes.config';
import { HeadingMessageComponent } from './heading-message/heading-message.component';
import { MessageService } from './message.service';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';





@NgModule({
  
  imports:      [ BrowserAnimationsModule,MaterialModule,HttpClientModule,BrowserModule,CommonModule, FormsModule,ReactiveFormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, TemplatedrivenComponent, HeadingMessageComponent, ReactiveformComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService,HttpClientModule, MessageService]
})
export class AppModule { }
