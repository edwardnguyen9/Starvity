import { UserService } from './services/user.service';
import { MediaService } from './services/media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import { UsernamePipe } from './pipes/username.pipe';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'front',
    component: FrontComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UploadComponent,
    TopBarComponent,
    ThumbnailPipe,
    UsernamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    MediaService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
