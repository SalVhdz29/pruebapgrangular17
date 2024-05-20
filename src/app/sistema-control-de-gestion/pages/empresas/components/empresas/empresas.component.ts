import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Empresa } from '../../interfaces/empresas';
import { catchError, throwError } from 'rxjs';
import { Table } from 'primeng/table';
import { EmpresasService } from '../../services/empresas.service';


@Component({
  selector: 'app-empresas',
  // standalone: true,
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent implements OnInit {
    loadingFlg: boolean = false;
    showCreateDialog: WritableSignal<boolean> = signal(false);
    listaEmpresas: Empresa[] =[];
    empresa:WritableSignal<Empresa|null> = signal(null);
    showUpdateDialog: WritableSignal<boolean> = signal(false);

    constructor(private empresasService: EmpresasService){}

    ngOnInit(): void {
      this.loadingFlg=true;
      this.obtenerEmpresas();
    }

    obtenerEmpresas(){
      this.empresasService
      .getEmpresas()
      .pipe(
        catchError((error) => {
          const status = error.status;

          if (status == '400' || status == '404' || status == '500') {
              // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
          }

          this.loadingFlg = false;
          return throwError(error.statusText);
        })
      )
      .subscribe((response)=>{
        this.listaEmpresas = response.response;
        this.loadingFlg=false;
    });
    }

    setEmpresaSelected(empresa: Empresa){
      
      this.empresa.set(empresa);
      this.showUpdateDialog.set(true);
      
    }

    deleteEmpresaSelected(empresa: Empresa){
      this.empresasService.delEmpresa(empresa.id)
      .subscribe(()=>{
        this.loadingFlg=true;
        this.obtenerEmpresas();
      });
    }

    resetUpdFlg(){    
      this.empresa.set(null);
      this.showUpdateDialog.set(false);
    }

    reloadResetUpdFlg(){
      this.resetUpdFlg();
      this.loadingFlg=true;
      this.obtenerEmpresas();
    }

    reloadResetCreateFlg(){   
      this.showCreateDialog.set(false);
      this.obtenerEmpresas();
    }

    clear(table: Table) {
      table.clear();
    }
}
