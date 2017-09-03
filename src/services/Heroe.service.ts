import { Injectable } from '@angular/core';
import { Heroe } from '../models/Heroe.model';

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

@Injectable()
export class HeroeService {
    ObtenerHeroes(): Promise<Heroe[]> {
        return Promise.resolve(HEROES);
    }

    ObtenerHeroesLento(): Promise<Heroe[]> {
        return new Promise(resolve => {
          // SImular conexión lenta de dos segundos.
          setTimeout(() => resolve(this.ObtenerHeroes()), 2000);
        });
      }
}

