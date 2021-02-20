import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { VideoComponent } from '../video/video.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'video', component: VideoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
