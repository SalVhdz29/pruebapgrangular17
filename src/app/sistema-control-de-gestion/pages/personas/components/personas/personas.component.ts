import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Persona, Personas } from '../../interfaces/personas';
import { PersonasService } from '../../services/personas.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent implements OnInit {
  loadingFlg: boolean = false;
  showCreateDialog: WritableSignal<boolean> = signal(false);
  listaPersonas: Personas=[];
  persona: WritableSignal<Persona|null> = signal(null);
  showUpdateDialog: WritableSignal<boolean> = signal(false);

  constructor(private personasService: PersonasService){}

  ngOnInit(): void {
    this.loadingFlg=true;
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.personasService
      .getPersonas()
      .pipe()
      .subscribe((response)=>{
        this.listaPersonas = response;
        this.loadingFlg=false;
    });
  }

  setPersonaSelected(persona: Persona){   
    this.persona.set(persona);
    this.showUpdateDialog.set(true);
  }

  deletePersonaSelected(persona: Persona){
    this.personasService.delPersona(persona.id)
    .subscribe(()=>{
      this.loadingFlg=true;
      this.obtenerPersonas();
    });
  }

  resetUpdFlg(){    
    this.persona.set(null);
    this.showUpdateDialog.set(false);
  }

  reloadResetUpdFlg(){
    this.resetUpdFlg();
    this.loadingFlg=true;
    this.obtenerPersonas();
  }

  reloadResetCreateFlg(){   
    this.showCreateDialog.set(false);
    this.obtenerPersonas();
  }


  clear(table: Table) {
    table.clear();
  }

}
