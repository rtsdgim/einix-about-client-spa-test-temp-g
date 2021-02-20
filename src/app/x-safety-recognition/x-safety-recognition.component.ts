import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-x-safety-recognition',
  templateUrl: './x-safety-recognition.component.html',
  styleUrls: ['./x-safety-recognition.component.scss']
})
export class XSafetyRecognitionComponent implements OnInit {

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  public videoSource = null;

  constructor() { }

  ngOnInit() {
  }

  playVideo(id: number) {
    switch (id) {
      case 1: this.videoSource = 'assets/videos/safety_demo_1.mp4'; break;
    }

    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.load();
    video.play();
  }

}
