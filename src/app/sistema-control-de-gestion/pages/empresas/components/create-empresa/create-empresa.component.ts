import { Component, EventEmitter, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrl: './create-empresa.component.scss'
})
export class CreateEmpresaComponent {

  @Output() resetFlgs = new EventEmitter();
  @Output() reloadFlgs = new EventEmitter();

  @Input()
  showDialog: WritableSignal<boolean> = signal(false);
  nombre: string = "";
  direccion: string = "";
  telefono: string = "";

  constructor(private empresasService: EmpresasService){
    effect(()=>{
      const flg = this.showDialog();
      if(flg == false){
        this.limpiarInputs();
      }
    })
  }

  limpiarInputs(){
    this.nombre="";
    this.telefono="";
    this.direccion="";
  }

  agregarEmpresa(){
    if(this.nombre == "" || this.telefono == "" || this.direccion == ""){
      return;
    }
    this.empresasService.postEmpresa(this.nombre, this.direccion, this.telefono)
    .pipe()
    .subscribe(()=>{
        this.reloadFlgs.emit();
        this.limpiarInputs();
    });
  }


}
