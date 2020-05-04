import { Routes } from '@angular/router';

import { LoginSection } from './auth/login/login.component';
import{PricingSection } from './pricing/pricing.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'pricing' , component:PricingSection }
]