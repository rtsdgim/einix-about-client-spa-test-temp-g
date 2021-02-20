import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public isLoggedIn(): boolean {
        if (localStorage.getItem('loggedIn') === 'true') {
            return true;
        } else {
            return false;
        }
    }

    public login(username: string): void {
        localStorage.setItem('username', username);
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard';
    }

    public logout(): void {
        localStorage.removeItem('username');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('photo');
        window.location.href = '/';
    }
}
