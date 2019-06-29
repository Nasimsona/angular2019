import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Material} from './material/material.module';

import { MessageService } from '../message.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  passedmsg:string;
  employeecount:number=0;
  employeelist : Employee[];
  displayedColumns: string[] = ['id', 'name'];
  constructor(private employeeService:EmployeeService,private messageService: MessageService) { }
//@Output() countToEmit= new EventEmitter<string>();


  ngOnInit() {

    this.employeelist=this.employeeService.getEmployees();
    

   /* this.employeeService.getEmployees<Emoloyee[]>().subscribe((res)=>{
      console.log("Created a customer");
      this.employeelist=res;
});*/
  }

  getEmployeecount():void {
    this.employeecount=this.employeelist.length;
    //this.countToEmit.emit(""+this.employeecount);
    this.messageService.sendMessage(""+this.employeecount);
  }

}