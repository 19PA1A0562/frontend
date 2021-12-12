import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean = false;
  name:String;
  password:String;
  phonenumber:String;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.name]],
      password:['',Validators.required],
      phonenumber:['',Validators.required],
    });
  }
  onSubmit(): void{
    this.submitted = true;
    if(this.registrationForm.invalid){
      return;
    }
    else{
      this.name = this.registrationForm.value.name
      this.password = this.registrationForm.value.password
      this.phonenumber = this.registrationForm.value.phonenumber
      console.log(this.name);
      console.log(this.password);
      console.log(this.phonenumber);
    }
  }
}
