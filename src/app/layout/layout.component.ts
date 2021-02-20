import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_shared/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.enableTheme();
  }
}
