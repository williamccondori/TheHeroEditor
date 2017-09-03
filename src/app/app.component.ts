import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Titulo = 'Lista de héroes';
  Heroe: Heroe= {
    Id : 1,
    Nombre : 'Superman'
  };
}

export class Heroe {
  Id : number;
  Nombre: string;
}