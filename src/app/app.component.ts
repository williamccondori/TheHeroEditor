import { Component, OnInit } from '@angular/core';

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
export class AppComponent{
  Titulo = 'Lista de héroes'; // Variable que almacena el tíulo de la página.
}