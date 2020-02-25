import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from './common/user.service';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './addUser/adduser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent,
    HomeComponent,
    LoginComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
