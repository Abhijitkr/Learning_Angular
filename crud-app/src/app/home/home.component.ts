import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserForm } from '../model/UserForm';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm: FormGroup;
  persons: UserForm[] = [];
  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      qualification: ['']
    })
  }

  submitFrom(){
    const value = this.userForm.value;
    console.log(value);
    this.persons.push(value);
    this.userForm.reset();
    console.log(this.persons);
  }

}
