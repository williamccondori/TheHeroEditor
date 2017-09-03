import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Heroe } from '../models/Heroe.model';
import { HeroeService } from '../services/Heroe.service';

import 'rxjs/add/operator/switchMap';

/**
 * Elementos del componente
 */
@Component({
  selector: 'HeroeDetalle',
  templateUrl: './HeroeDetalle.component.html',
  styleUrls: ['./HeroeDetalle.component.css']
})

/**
 * Clase pública del componente.
 */
export class HeroeDetalleComponent implements OnInit {

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroeService.BuscarHeroe(+params.get('id')))
      .subscribe(hero => this.Heroe = hero);
  }

  constructor(
    private heroeService: HeroeService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  Regresar(): void {
    this.location.back();
  }

  @Input() Heroe: Heroe;
}