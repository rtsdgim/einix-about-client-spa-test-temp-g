import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SaferService {

    private requests = [];

    // NEW REQUEST
    public addNewRequest(newRequest) {
        this.requests = this.getAllRequests();

        this.requests.push(newRequest);
        localStorage.setItem('SaferRequests', JSON.stringify(this.requests));
    }

    // GETALL
    public getAllRequests(): any {
        if (localStorage.getItem('SaferRequests')) {
            return JSON.parse(localStorage.getItem('SaferRequests'));
        } else {
            return [];
        }
    }

    // GETBYID
    public getRequest(id: number): any {
        return this.requests[id];
    }
}
