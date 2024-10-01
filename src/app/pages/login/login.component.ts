import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm : FormGroup;

  router = inject(Router);

  private fb = inject(FormBuilder); 

  constructor() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]], 
      password: ['', [Validators.required]] 
    });
  }

 
  onLogin() {

    if (this.loginForm.valid) {
      const userLogin = this.loginForm.value; 
      localStorage.setItem('currentUser', JSON.stringify(userLogin)); 
      this.router.navigateByUrl('main');  
    } else alert("Enter the Username and Password!")
  }
}


 

