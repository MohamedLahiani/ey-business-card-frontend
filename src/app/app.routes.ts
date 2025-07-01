import { Routes } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { LoginPageComponent } from './../app/login/components/logi-page/logi-page.component';


export const routes: Routes = [
  { path: '', component: BusinessCardComponent },
  { path: 'login', component: LoginPageComponent },

];
