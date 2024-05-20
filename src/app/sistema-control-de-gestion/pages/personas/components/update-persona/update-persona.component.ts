import { Component, EventEmitter, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/personas';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrl: './update-persona.component.scss'
})
export class UpdatePersonaComponent {
  @Output() resetFlgs = new EventEmitter();
  @Output() reloadFlgs = new EventEmitter();

  @Input()
  persona: WritableSignal<Persona | null> = signal(null);
  @Input()
  showDialog: WritableSignal<boolean> = signal(false);
  nombre: string = "";
  apellido: string = "";
  fecha_nacimiento: Date|null = null;
  ocupacion: string ="";

  constructor(private personasService: PersonasService){

    effect(()=>{
      const flg = this.showDialog();
      const per = this.persona();
      if(flg == false || per == null){
      
      }else{
        this.personasService.getPersonaById(per.id)
        .pipe()
        .subscribe(response=>{
          const {nombre, apellido, fechaNacimiento}=response;
          this.nombre = nombre;
          this.apellido=apellido;
          this.fecha_nacimiento = new Date(fechaNacimiento);

        });
      }

    });
  }

  agregarPersona(){
    const per = this.persona();
    if(per == null || this.nombre == "" || this.apellido == "" || this.ocupacion == "" || this.fecha_nacimiento== null){
      return;
    }
    this.personasService.putPersona(per.id, this.nombre, this.apellido, this.ocupacion, this.fecha_nacimiento.toISOString())
    .pipe()
    .subscribe(()=>{
        this.reloadFlgs.emit();
    });
    
  }

}
