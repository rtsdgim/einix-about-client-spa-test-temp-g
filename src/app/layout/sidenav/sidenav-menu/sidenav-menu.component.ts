import { Component } from '@angular/core';
import { WindowService } from 'src/app/_shared/window.service';
import { LayoutService } from 'src/app/_shared/layout.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {

  constructor(
    public windowService: WindowService,
    public layoutService: LayoutService
  ) { }

  public onClick(): void {
    if (this.windowService.isMediumScreen) {
      this.layoutService.closeSidenav();
    }
  }
}
