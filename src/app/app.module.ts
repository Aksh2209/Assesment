import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './login/login.component';
import { ProductSection } from './product/product.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';

@NgModule({
  imports: [ 
    BrowserModule, FormsModule, 
    RouterModule.forRoot (appRoutes)
  ],
  declarations: [ 
    AppComponent, LoginSection, ProductSection, HeaderComponent, FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
