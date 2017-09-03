import { Component, Input } from '@angular/core';

import { Heroe } from '../models/Heroe';

@Component({
  selector: 'HeroeDetalle',
  templateUrl: './HeroeDetalle.component.html'
})

export class HeroeDetalleComponent {
  @Input() Heroe: Heroe;
}