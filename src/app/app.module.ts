import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterial } from './angular.material';
import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './login/login.component';
import { ProductSection } from './product/product.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { AddTopic } from './product/add.discussion.component';

@NgModule({
  imports: [ 
    BrowserModule, FormsModule,ReactiveFormsModule, AngularMaterial,BrowserAnimationsModule,
    RouterModule.forRoot (appRoutes)
  ],
  declarations: [ 
    AppComponent, LoginSection, ProductSection, HeaderComponent, FooterComponent, AddTopic
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
