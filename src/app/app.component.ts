import { Component, OnInit } from '@angular/core';
import { Heroe } from '../models/Heroe.model';
import { HeroeService } from '../services/Heroe.service';

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
export class AppComponent implements OnInit{
  
  constructor(private heroeService: HeroeService) {

  }

  ObtenerHeroes(): void {
    this.heroeService.ObtenerHeroesLento().then(Heroe => this.Heroes = Heroe);
  }

  ngOnInit(): void {
    this.ObtenerHeroes();
  }

  Titulo = 'Lista de héroes'; // Variable que almacena el tíulo de la página.
  Heroes: Heroe[]; // Lista de héroes
  HeroeSeleccionado: Heroe; // Héroe seleccionado.

  /**
   * Obtiene los datos del héroe seleccionado y lo asigna a una variable.
   * @param heroe Héroe seleccionado
   */
  Mostrar(heroe: Heroe): void {
    this.HeroeSeleccionado = heroe;
  }
}