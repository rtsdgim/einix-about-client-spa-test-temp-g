import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-x-transport-recognition',
  templateUrl: './x-transport-recognition.component.html',
  styleUrls: ['./x-transport-recognition.component.scss']
})
export class XTransportRecognitionComponent implements OnInit {

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  public videoSource = null;

  constructor() { }

  ngOnInit() {
  }

  playVideo(id: number) {
    switch (id) {
      case 1: this.videoSource = 'assets/videos/transport_demo_1.mp4'; break;
      case 2: this.videoSource = 'assets/videos/transport_demo_2.mp4'; break;
      case 3: this.videoSource = 'assets/videos/transport_demo_3.mp4'; break;
    }

    console.log(this.videoSource);

    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.load();
    video.play();
  }

}
