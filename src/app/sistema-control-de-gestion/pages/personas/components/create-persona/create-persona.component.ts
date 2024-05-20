import { Component, EventEmitter, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrl: './create-persona.component.scss'
})
export class CreatePersonaComponent {
    @Output() resetFlgs = new EventEmitter();
    @Output() reloadFlgs = new EventEmitter();
    @Input()
    showDialog: WritableSignal<boolean> = signal(false);
    nombre: string = "";
    apellido: string = "";
    fecha_nacimiento: Date|null = null;
    ocupacion: string ="";

    constructor(private personasService: PersonasService){
      effect(()=>{
        const flg = this.showDialog();
        if(flg == false){
          this.limpiarInputs();
        }
      })
    }

    limpiarInputs(){
      this.nombre="";
      this.apellido="";
      this.ocupacion="";
      this.fecha_nacimiento=null;
    }

    agregarPersona(){
      if(this.nombre == "" || this.apellido == "" || this.ocupacion == "" || this.fecha_nacimiento== null){
        return;
      }
      this.personasService.postPersona(this.nombre, this.apellido, this.ocupacion, this.fecha_nacimiento.toISOString())
      .pipe()
      .subscribe(()=>{
          this.reloadFlgs.emit();
          this.limpiarInputs();

      });
      
    }
}
