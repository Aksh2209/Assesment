import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterial } from './angular.material';
import { appRoutes } from './app.route';

import { PlansService } from './services/plans.service';

import { AppComponent } from './app.component';
import { LoginSection } from './login/login.component';
import { ProductSection, AddTopic } from './product/product.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';

@NgModule({
  imports: [ 
    BrowserModule, FormsModule,ReactiveFormsModule, AngularMaterial,BrowserAnimationsModule, HttpClientModule,
    RouterModule.forRoot (appRoutes)
  ],
  entryComponents: [ AddTopic ],
  declarations: [ 
    AppComponent, LoginSection, ProductSection, HeaderComponent, FooterComponent,  AddTopic
  ],
   providers: [ PlansService ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
