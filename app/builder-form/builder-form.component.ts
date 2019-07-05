import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css']
})
export class BuilderFormComponent implements OnInit {

constructor(private fb: FormBuilder) { }

private employeeForm :FormGroup;

  ngOnInit() {
  this.employeeForm = this.fb.group({
    fullName: ['', [Validators.required]],
    contactPreference: ['email'],
    // Other Form Controls..
    // Create skills FormArray using the injected FormBuilder
    // class array() method. At the moment, in the created
    // FormArray we only have one FormGroup instance that is
    // returned by addSkillFormGroup() method
    skills: this.fb.array([
      this.addSkillFormGroup()
    ])
  });

  // Rest of the code
}

addSkillFormGroup(): FormGroup {
  return this.fb.group({
    skillName: ['', Validators.required],
    experienceInYears: ['', Validators.required],
    proficiency: ['', Validators.required]
  });
}

}