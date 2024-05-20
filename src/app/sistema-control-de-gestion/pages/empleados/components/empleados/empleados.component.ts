import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.scss'
})
export class EmpleadosComponent implements OnInit {
  loadingFlg: boolean = false;
  showCreateDialog: WritableSignal<boolean> = signal(false);
  listaEmpleados:Empleado[] =[];
  empleado: WritableSignal<Empleado| null>=signal(null);
  showUpdateDialog: WritableSignal<boolean> = signal(false);

  constructor(private empleadosService: EmpleadosService){}


  ngOnInit(): void {
    this.loadingFlg=true;
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadosService
      .getEmpleados()
      .pipe()
      .subscribe((response)=>{
        this.listaEmpleados = response.response;
        this.loadingFlg=false;
    });
  }

  setEmpleadoSelected(empleado: Empleado){   
    this.empleado.set(empleado);
    this.showUpdateDialog.set(true);
  }

  deleteEmpleadoSelected(empleado: Empleado){
    this.empleadosService.delEmpleado(empleado.id)
    .subscribe(()=>{
      this.loadingFlg=true;
      this.obtenerEmpleados();
    });
  }

  resetUpdFlg(){    
    this.empleado.set(null);
    this.showUpdateDialog.set(false);
  }

  reloadResetUpdFlg(){
    this.resetUpdFlg();
    this.loadingFlg=true;
    this.obtenerEmpleados();
  }

  reloadResetCreateFlg(){   
    this.showCreateDialog.set(false);
    this.obtenerEmpleados();
  }
  clear(table: Table) {
    table.clear();
  }
}
