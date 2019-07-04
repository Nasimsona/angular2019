import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css']
})
export class BuilderFormComponent implements OnInit {

constructor(private fb: FormBuilder) { }



  ngOnInit() {
  }
addAlias() {
  this.aliases.push(this.fb.control(''));
}


    profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
      }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

}