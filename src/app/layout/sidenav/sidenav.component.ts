import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from 'src/app/_shared/layout.service';
import { WindowService } from 'src/app/_shared/window.service';
import { AuthService } from 'src/app/_shared/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private layoutService: LayoutService,
    public windowService: WindowService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.layoutService.setSidenav(this.sidenav);
  }
}
