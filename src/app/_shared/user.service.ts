import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    // user name
    public getUserName(): string {
        return localStorage.getItem('username');
    }
    public setUserName(name: string): void {
        localStorage.setItem('username', name);
    }

    // photo
    public getPhoto(): string {
        return localStorage.getItem('photo');
    }
    public setPhoto(photo: string): void {
        localStorage.setItem('photo', photo);
    }

    // Incedent Photo
    public getIncedentPhoto(): string {
        return localStorage.getItem('IncedentPhoto');
    }
    public setIncedentPhoto(photo: string): void {
        localStorage.setItem('IncedentPhoto', photo);
    }
}
