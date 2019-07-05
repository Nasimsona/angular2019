import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {


profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl('',[Validators.minLength(4)]),
  });

onSubmit(){
 console.warn(this.profileForm.value)

}


}