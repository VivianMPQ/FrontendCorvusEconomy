import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './security/pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './security/pages/change-password/change-password.component';
import { InputComponent } from './public/input/input.component';
import { OutputComponent } from './public/output/output.component';
import {AppRoutingModule} from "./app-routing.modules";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
