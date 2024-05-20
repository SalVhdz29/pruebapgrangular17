import { Component, EventEmitter, Input, OnInit, Output, WritableSignal, effect, signal } from '@angular/core';
import { Empleado } from '../../interfaces/empleados';
import { Empresa } from '../../../empresas/interfaces/empresas';
import { EmpleadosService } from '../../services/empleados.service';
import { EmpresasService } from '../../../empresas/services/empresas.service';
@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrl: './update-empleado.component.scss'
})
export class UpdateEmpleadoComponent implements OnInit {
  @Output() resetFlgs = new EventEmitter();
  @Output() reloadFlgs = new EventEmitter();

  @Input()
  empleado: WritableSignal<Empleado | null> = signal(null);
  @Input()
  showDialog: WritableSignal<boolean> = signal(false);
  listaEmpresas: Empresa[] =[];
  empresa: Empresa | null | undefined = null;
  fecha_contrato: Date|null = null;
  fecha_fin_contrato: Date|null = null;

  constructor(private empleadoService: EmpleadosService, private empresasService: EmpresasService){
    effect(()=>{
      const flg = this.showDialog();
      const emp = this.empleado();
      if(flg == false || emp == null){
        this.limpiarEstado()
      }else{
        this.empleadoService.getEmpleadoById(emp.id)
        .pipe()
        .subscribe(response=>{
          const {idEmpresa, fechaContrato, fechaFinContrato}=response.response;
          const coincidencia = this.listaEmpresas.find(i=>i.id == idEmpresa);
          this.empresa = coincidencia;
          this.fecha_contrato = new Date(fechaContrato);
          if(fechaFinContrato != null){
            this.fecha_fin_contrato = new Date(fechaFinContrato);
          }

        });
      }
    });
  }

  ngOnInit(): void {
    this.empresasService
      .getEmpresas()
      .pipe()
      .subscribe((response)=>{
        this.listaEmpresas = response.response;
    });
  }

  limpiarEstado(){
    this.empresa = null;
    this.fecha_contrato=null;
    this.fecha_fin_contrato=null;
  }
  agregarEmpleado(){
    const emp = this.empleado();
    if(emp == null || this.fecha_contrato == null || this.empresa == null){
      return;
    }
    let fecha_fin_contrato = null;
    if(this.fecha_fin_contrato != null){
      fecha_fin_contrato = this.fecha_fin_contrato.toISOString()
    }
    this.empleadoService.putEmpleado(emp.id, this.fecha_contrato?.toISOString(), fecha_fin_contrato, this.empresa?.id)
    .pipe()
    .subscribe(()=>{
      this.reloadFlgs.emit();
      this.limpiarEstado();
    })
  }

}
