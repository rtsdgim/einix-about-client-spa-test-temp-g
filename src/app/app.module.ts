import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './_core/core.module';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidenavMenuComponent } from './layout/sidenav/sidenav-menu/sidenav-menu.component';
import { XDashboardComponent } from './x-dashboard/x-dashboard.component';
import { XReportsComponent } from './x-reports/x-reports.component';
import { XSettingsComponent } from './x-settings/x-settings.component';
import { XFaceRecognitionComponent } from './x-face-recognition/x-face-recognition.component';
import { XTransportRecognitionComponent } from './x-transport-recognition/x-transport-recognition.component';
import { XSafetyRecognitionComponent } from './x-safety-recognition/x-safety-recognition.component';
import { XRealtimeAnalysComponent } from './x-realtime-analys/x-realtime-analys.component';
import { XFeedbackComponent } from './x-feedback/x-feedback.component';
import { XHelpComponent } from './x-help/x-help.component';
import { XDataanalyticsComponent } from './x-dataanalytics/x-dataanalytics.component';
import { XSelfieComponent } from './x-selfie/x-selfie.component';
import { XSaferComponent } from './x-safer/x-safer.component';
import { XIncedentPhotoComponent } from './x-incedent-photo/x-incedent-photo.component';
import { XSaferAdminComponent } from './x-safer-admin/x-safer-admin.component';
import { XSaferAdminDetailComponent } from './x-safer-admin-detail/x-safer-admin-detail.component';
import { DocumentComponent } from './document/document.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent,
    SidenavMenuComponent,
    XDashboardComponent,
    XReportsComponent,
    XSettingsComponent,
    XFaceRecognitionComponent,
    XTransportRecognitionComponent,
    XSafetyRecognitionComponent,
    XRealtimeAnalysComponent,
    XFeedbackComponent,
    XHelpComponent,
    XDataanalyticsComponent,
    XSelfieComponent,
    XSaferComponent,
    XIncedentPhotoComponent,
    XSaferAdminComponent,
    XSaferAdminDetailComponent,
    DocumentComponent,

  ],
  entryComponents: [
    XSelfieComponent,
    XIncedentPhotoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
