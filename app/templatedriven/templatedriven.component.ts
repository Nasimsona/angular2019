import { Component, OnInit } from '@angular/core';
import {UserModel} from './user-model';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  gender:string[]=['Male','Female'];
  user:UserModel;
  constructor() { }

  ngOnInit() {
    this.user= new UserModel({
      name:'',gender:this.gender[0],age:18,password:{pwd:'',confirmpwd:''}

    });   
  }

  onSubmit()
  {
    //alert("sumbitted");
    console.log(this.user);

  }

}