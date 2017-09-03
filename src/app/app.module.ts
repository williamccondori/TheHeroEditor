import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HeroeService } from '../services/Heroe.service';

import { AppComponent } from './app.component';
import { HeroeDetalleComponent } from './HeroeDetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
