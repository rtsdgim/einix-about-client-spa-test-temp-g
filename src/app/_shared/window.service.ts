import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  public isLargeScreen = false;
  public isMediumScreen = false;

  constructor(
    public authService: AuthService
  ) {
    const screenWidth: number = window.innerWidth;

    if (authService.isLoggedIn()) {
      if (screenWidth > 768) {
        this.isLargeScreen = true;
      } else if (screenWidth <= 768) {
        this.isMediumScreen = true;
      }
    }
  }
}
