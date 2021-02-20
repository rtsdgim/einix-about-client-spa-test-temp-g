import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMaterialModule } from './home-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateParser, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoComponent } from '../video/video.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent

  ],
  imports: [
    CommonModule,
    HomeMaterialModule,
    ReactiveFormsModule,

    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    HomeRoutingModule,
  ]
})
export class HomeModule { }
