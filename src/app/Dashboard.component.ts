import { Component, OnInit } from '@angular/core'
import { Heroe } from '../models/Heroe.model'
import { HeroeService } from '../services/Heroe.service'

@Component({
    selector: 'Dashboard',
    templateUrl: './Dashboard.component.html',
    styleUrls: [ './Dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    Heroes: Heroe[] = [];

    constructor(private heroeService: HeroeService) {
    }

    ngOnInit(): void {
        this.heroeService.ObtenerHeroes()
            .then(heroes => this.Heroes = heroes.slice(1, 5));
    }

}