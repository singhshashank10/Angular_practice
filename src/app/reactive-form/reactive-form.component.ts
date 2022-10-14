import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    name: new FormControl(' ', [Validators.required]),
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z+$]')]),
    password: new FormControl(' ', [Validators.required, Validators.minLength(5)])
  });

  userReactiveLogin() {
    console.log(this.loginForm.value);
  }
  get userNameValidator() {
    return this.loginForm.get("name")
  }

}
