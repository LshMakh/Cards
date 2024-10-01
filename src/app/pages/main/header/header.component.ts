import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  currentUser: any = null;  
  router = inject(Router);

  ngOnInit() {
    const isCurrentUser = localStorage.getItem('currentUser');  
    if (isCurrentUser != null) {
      this.currentUser = JSON.parse(isCurrentUser);  
    }
  }

  onLogout() {
    
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('login'); 
  }
}

