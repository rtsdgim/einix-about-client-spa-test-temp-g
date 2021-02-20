import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainGuard } from './auth/main-guard.module';
import { XDashboardComponent } from './x-dashboard/x-dashboard.component';
import { XSettingsComponent } from './x-settings/x-settings.component';
import { XFeedbackComponent } from './x-feedback/x-feedback.component';
import { XHelpComponent } from './x-help/x-help.component';
import { XFaceRecognitionComponent } from './x-face-recognition/x-face-recognition.component';
import { XSafetyRecognitionComponent } from './x-safety-recognition/x-safety-recognition.component';
import { XTransportRecognitionComponent } from './x-transport-recognition/x-transport-recognition.component';
import { XRealtimeAnalysComponent } from './x-realtime-analys/x-realtime-analys.component';
import { XDataanalyticsComponent } from './x-dataanalytics/x-dataanalytics.component';
import { XReportsComponent } from './x-reports/x-reports.component';
import { XSaferComponent } from './x-safer/x-safer.component';
import { XSaferAdminComponent } from './x-safer-admin/x-safer-admin.component';

import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'docs', component: DocumentComponent
  },
  /**
   *
   *
   * Portal Start
   *
   *
   */
  { path: 'dashboard', component: XDashboardComponent, canActivate: [MainGuard] },
  { path: 'facerec', component: XFaceRecognitionComponent, canActivate: [MainGuard] },
  { path: 'safetyrec', component: XSafetyRecognitionComponent, canActivate: [MainGuard] },
  { path: 'transportrec', component: XTransportRecognitionComponent, canActivate: [MainGuard] },
  { path: 'realtime', component: XRealtimeAnalysComponent, canActivate: [MainGuard] },
  { path: 'analytics', component: XDataanalyticsComponent, canActivate: [MainGuard] },
  { path: 'reports', component: XReportsComponent, canActivate: [MainGuard] },
  { path: 'settings', component: XSettingsComponent, canActivate: [MainGuard] },
  { path: 'feedback', component: XFeedbackComponent, canActivate: [MainGuard] },
  { path: 'help', component: XHelpComponent, canActivate: [MainGuard] },
  { path: 'safer', component: XSaferComponent, canActivate: [MainGuard] },
  { path: 'safer-admin', component: XSaferAdminComponent, canActivate: [MainGuard] },
  /**
   * 
   * 
   * Portal End 
   * 
   * 
   *
   *
   * Portal End
   *
   *
   */
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
