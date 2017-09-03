import { Component } from '@angular/core';
import { Heroe } from '../models/Heroe';

/**
 * Array de elementos de tipo Heroe, definidas en una constante.
 */
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

/**
 * Elementos del componente.
 */
@Component({
  selector: 'Aplicacion',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Clase pública del componente.
 */
export class AppComponent {
  
  Titulo = 'Lista de héroes'; // Variable que almacena el tíulo de la página.
  Heroes = HEROES; // Lista de héroes.
  HeroeSeleccionado: Heroe; // Héroe seleccionado.

  /**
   * Obtiene los datos del héroe seleccionado y lo asigna a una variable.
   * @param heroe Héroe seleccionado
   */
  Mostrar(heroe: Heroe): void {
    this.HeroeSeleccionado = heroe;
  }
}