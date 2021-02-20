import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthMaterialModule } from './auth-material.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
