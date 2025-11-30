import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      qualification: ['']
    })
  }

  submitFrom(){
    console.log(this.userForm.value);
  }

}
