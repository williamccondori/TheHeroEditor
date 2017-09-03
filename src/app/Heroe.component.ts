import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Heroe } from '../models/Heroe.model';
import { HeroeService } from '../services/Heroe.service';

@Component({
    selector: 'Heroe',
    templateUrl: './Heroe.component.html',
    styleUrls: ['./app.component.css']
})

export class HeroeComponent implements OnInit {

    Heroes: Heroe[]; // Lista de héroes
    HeroeSeleccionado: Heroe; // Héroe seleccionado.

    constructor(private heroeService: HeroeService, private router: Router) {

    }

    Mostrar(heroe: Heroe): void{
        this.HeroeSeleccionado = heroe;
    }

    MostrarDetalle(): void {
        this.router.navigate(['/heroe', this.HeroeSeleccionado.Id]);
    }

    ObtenerHeroes(): void {
        this.heroeService.ObtenerHeroes().then(Heroe => this.Heroes = Heroe);
    }

    ngOnInit(): void {
        this.ObtenerHeroes();
    }
}