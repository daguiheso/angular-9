import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-basic',
  templateUrl: './forms-basic.component.html',
  styleUrls: ['./forms-basic.component.scss']
})
export class FormsBasicComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private builder: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.builder.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
