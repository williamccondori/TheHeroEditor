import { Component } from '@angular/core';

import { Heroe } from '../models/Heroe';

const HEROES: Heroe[] = [
  { Id: 11, Nombre: 'Mr. Nice' },
  { Id: 12, Nombre: 'Narco' },
  { Id: 13, Nombre: 'Bombasto' },
  { Id: 14, Nombre: 'Celeritas' },
  { Id: 15, Nombre: 'Magneta' },
  { Id: 16, Nombre: 'RubberMan' },
  { Id: 17, Nombre: 'Dynama' },
  { Id: 18, Nombre: 'Dr IQ' },
  { Id: 19, Nombre: 'Magma' },
  { Id: 20, Nombre: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Titulo = 'Lista de héroes';
  Heroes = HEROES;
  HeroeSeleccionado: Heroe;

  Mostrar(heroe: Heroe): void {
    this.HeroeSeleccionado = heroe;
  }
}