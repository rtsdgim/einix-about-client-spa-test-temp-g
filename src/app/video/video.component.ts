import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video = 'assets/videos/EinixVision - video presentation 480.mp4';

  constructor() { }

  ngOnInit() {
  }

}
