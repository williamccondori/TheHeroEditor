import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * Servicios.
 */
import { HeroeService } from '../services/Heroe.service';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard.component';
import { HeroeComponent } from './Heroe.component';
import { HeroeDetalleComponent } from './HeroeDetalle.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroeComponent,
    HeroeDetalleComponent
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
