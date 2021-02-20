import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class LayoutService {
    private sidenav: MatSidenav;

    public setSidenav(sidenav: MatSidenav): void {
        if (sidenav != null) {
            this.sidenav = sidenav;
            this.sidenav.autoFocus = false;
        }
    }

    public toggleSidenav(): void {
        this.sidenav.toggle();
    }

    public openSidenav(): void {
        this.sidenav.open();
    }

    public closeSidenav(): void {
        this.sidenav.close();
    }
}
