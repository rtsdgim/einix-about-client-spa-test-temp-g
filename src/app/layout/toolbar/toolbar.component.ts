import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_shared/layout.service';
import { ThemeService } from 'src/app/_shared/theme.service';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/_shared/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private layoutService: LayoutService,
    private themeService: ThemeService,
    public translateService: TranslateService,
    public authService: AuthService) {

    translateService.addLangs(['en', 'ru']);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void { }

  public toggleSidenav(): void {
    this.layoutService.toggleSidenav();
  }

  public toogleTheme() {
    this.themeService.toogleTheme();
  }

  public isLoggedIn(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  public logout(): void {
    this.authService.logout();
    this.layoutService.closeSidenav();
  }
}
