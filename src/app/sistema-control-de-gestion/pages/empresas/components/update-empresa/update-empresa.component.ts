import { Component, EventEmitter, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { Empresa } from '../../interfaces/empresas';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrl: './update-empresa.component.scss'
})
export class UpdateEmpresaComponent {
  @Output() resetFlgs = new EventEmitter();
  @Output() reloadFlgs = new EventEmitter();

  @Input()
  empresa: WritableSignal<Empresa | null> = signal(null);
  @Input()
  showDialog: WritableSignal<boolean> = signal(false);
  nombre: string = "";
  direccion: string = "";
  telefono: string = "";

  constructor(private empresasService: EmpresasService){

    effect(()=>{
    
      
      const flg = this.showDialog();
      const emp = this.empresa();
      if(flg == false || emp == null){
      
      }else{
        this.empresasService.getEmpresaById(emp.id)
        .pipe(

        )
        .subscribe(response=>{
          const {nombre, direccion, telefono}=response.response;
          this.nombre = nombre;
          this.direccion=direccion;
          this.telefono=telefono;
        });
      }

      
    });
  }

  agregarEmpresa(){
    const emp = this.empresa();
    if(emp == null || this.nombre == "" || this.telefono == "" || this.direccion == ""){
      return;
    }
    this.empresasService.putEmpresa(emp.id, this.nombre, this.direccion, this.telefono)
    .pipe()
    .subscribe(()=>{
        this.reloadFlgs.emit();
    });
    
  }
}
