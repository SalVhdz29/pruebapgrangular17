import { Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { Respuesta } from '../../interfaces/servicios';
import { InductoresService } from '../../../inductores/services/inductores.service';

@Component({
    selector: 'app-prueba',
    templateUrl: './prueba.component.html',
    styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit{

     //Propiedad reactiva
     propiedad: WritableSignal<string> = signal('');
     propiedadValorYNulo: WritableSignal<string | null> = signal(null);
     //no reactiva tipeada null
     respuesta!: Respuesta;

    constructor(
        private inductoresServices: InductoresService,
    ) {
        //Effect
        effect(() => {
            console.log();

            const algo = this.propiedad()

            console.log("ESCUCHE EL CAMBIO REACTIVO", this.propiedad());

        })
    }


    ngOnInit(): void {
       console.log('====================================');
       console.log();
       console.log('====================================');

       this.propiedad.set("ALGO")
    }







// propiedadEffect = effect(() => {
//         console.log();

//         const algo = this.propiedad()

//         console.log("ESCUCHE EL CAMBIO REACTIVO", this.propiedad());

//     })
}
