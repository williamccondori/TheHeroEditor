import { Component, Input } from '@angular/core';
import { Heroe } from '../models/Heroe';

/**
 * Elementos del componente
 */
@Component({
  selector: 'HeroeDetalle',
  templateUrl: './HeroeDetalle.component.html'
})

/**
 * Clase pública del componente.
 */
export class HeroeDetalleComponent {
  @Input() Heroe: Heroe;
}