import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../_shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public favoriteColorControl = new FormControl('');

  constructor(private authService: AuthService) { }

  public login(): void {
    const control = this.favoriteColorControl;

    if (!control.errors) {
      this.authService.login(control.value);
    }
  }

}
