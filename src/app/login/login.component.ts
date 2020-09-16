import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.hide = true;
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  doLogin() {
    console.log(this.form.value);
    this.route.navigate(['cadastro']);
  }
}
