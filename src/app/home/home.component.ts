import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public modal: MatDialog,
  ) { }

  openModal() {
    this.modal.open(VideoComponent);
  }
}
