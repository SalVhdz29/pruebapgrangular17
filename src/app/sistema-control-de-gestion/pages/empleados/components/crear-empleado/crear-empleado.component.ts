import { Component, EventEmitter, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { Empresa } from '../../../empresas/interfaces/empresas';
import { EmpleadosService } from '../../services/empleados.service';
import { EmpresasService } from '../../../empresas/services/empresas.service';
import { Empleado } from '../../interfaces/empleados';
import { Persona } from '../../../personas/interfaces/personas';
import { PersonasService } from '../../../personas/services/personas.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.scss'
})
export class CrearEmpleadoComponent {
  @Output() resetFlgs = new EventEmitter();
  @Output() reloadFlgs = new EventEmitter();

  @Input()
  showDialog: WritableSignal<boolean> = signal(false);
  listaEmpresas: Empresa[] =[];
  listaPersonas: Persona[] = [];
  persona: Persona | null | undefined = null;
  empresa: Empresa | null | undefined = null;
  fecha_contrato: Date|null = null;
  fecha_fin_contrato: Date|null = null;


  constructor(private empleadoService: EmpleadosService, private empresasService: EmpresasService, private personasService: PersonasService){
    effect(()=>{
        const flg = this.showDialog();
        if(flg == false ){
          this.limpiarEstado()
        }
    })
  }

  ngOnInit(): void {
    this.empresasService
      .getEmpresas()
      .pipe()
      .subscribe((response)=>{
        this.listaEmpresas = response.response;
    });

    this.personasService
      .getPersonas()
      .pipe()
      .subscribe(response=>{
        this.listaPersonas = response;
      })
  }

  limpiarEstado(){
    this.empresa = null;
    this.fecha_contrato=null;
    this.fecha_fin_contrato=null;
  }

  agregarEmpleado(){
    if(this.fecha_contrato == null || this.empresa == null || this.persona == null){
      return;
    }
    let fecha_fin_contrato = null;
    if(this.fecha_fin_contrato != null){
      fecha_fin_contrato = this.fecha_fin_contrato.toISOString()
    }
    this.empleadoService.postEmpleado(this.persona?.id,this.fecha_contrato?.toISOString(), fecha_fin_contrato, this.empresa?.id)
    .pipe()
    .subscribe(()=>{
      this.reloadFlgs.emit();
      this.limpiarEstado();
    })
  }

}
