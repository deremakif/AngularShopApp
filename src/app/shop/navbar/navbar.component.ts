import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
    public translate: TranslateService

  ) {

    translate.addLangs([  'tr', 'en']);
    translate.setDefaultLang('tr');
  }

  ngOnInit() {

  }

  isAuthenticated() {
    return this.authService.authenticated;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
