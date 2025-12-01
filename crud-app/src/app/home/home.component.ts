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
  editForm: FormGroup;
  persons: UserForm[] = [];
  selectedIndex: number | null = null;

  constructor(private fb: FormBuilder){

    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      qualification: ['']
    });

     this.editForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      qualification: ['']
    });
  }

  selectForEdit(index: number) {
    this.selectedIndex = index;
    this.editForm.patchValue(this.persons[index]);
  }
  
 saveEdit() {
    if (this.selectedIndex === null) return;
    this.persons[this.selectedIndex] = this.editForm.value;
    this.selectedIndex = null;
    this.editForm.reset();
  }

  delete(index: number) {
    if (index < 0 || index >= this.persons.length) return;
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
      this.editForm.reset();
    }
    this.persons.splice(index, 1);
  }

  submitFrom(){
    const value = this.userForm.value;
    console.log(value);
    this.persons.push(value);
    this.userForm.reset();
    console.log(this.persons);
  }

}
