import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
//import { take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  loginForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login():void{
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      const success = this.authService.login(username, password);
      if (success) {
        this.router.navigate(['/task']);
      } else {
        alert('Usuario o contraseña incorrectos! Usuario: “test01”   Contraseña: “test01”');
      }
    }

  }

}
