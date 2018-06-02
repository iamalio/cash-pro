import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SpentComponent } from './dashboard/spent.component';
import { MadeComponent } from './dashboard/made.component';
import { MadetotalsComponent } from './dashboard/madeTotals.component';
import { SpenttotalsComponent } from './dashboard/spentTotals.component';
import { TotalsComponent } from './dashboard/totals.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'made', component: MadeComponent },
  { path: 'spent', component: SpentComponent },
  { path: 'totals', component: TotalsComponent },
  
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, SpentComponent, MadeComponent, MadetotalsComponent, SpenttotalsComponent, TotalsComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
