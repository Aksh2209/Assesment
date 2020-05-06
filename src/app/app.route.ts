import { Routes } from '@angular/router';

import { LoginSection } from './login/login.component';
import{ ProductSection } from './product/product.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'product' , component:ProductSection }
]