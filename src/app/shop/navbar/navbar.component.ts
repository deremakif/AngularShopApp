import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  isAuthenticated() {
    return this.authService.authenticated;
  }
}
