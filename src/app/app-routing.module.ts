import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './Dashboard.component';
import { HeroeComponent }      from './Heroe.component';
import { HeroeDetalleComponent }  from './HeroeDetalle.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroe/:id', component: HeroeDetalleComponent },
  { path: 'heroe',     component: HeroeComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}