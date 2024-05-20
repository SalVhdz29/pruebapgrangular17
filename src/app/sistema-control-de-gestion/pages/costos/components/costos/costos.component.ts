import { Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { CatalogoInterface } from '../../../interfaces-generales/interfaces-generales.interfaces';
import { CostosMisionalesInterface, CostosResponsetInterface } from '../../interface/costos.interfaces';
import { CostosService } from '../../services/costos.service';
import { catchError, throwError } from 'rxjs';
import { Customer } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrl: './costos.component.css'
})
export class CostosComponent implements OnInit{

  constructor(private costosServices: CostosService, private customerService: CustomerService){}

  ngOnInit(): void {
    //this.ObtenerCostos()
  }

  misionalesList: CatalogoInterface[] = [
    {
      codigo: 1,
      descripcion: "INSTITUTO GEOGRAFICO Y CATASTRO NACIONAL"
    },
    {
      codigo: 2,
      descripcion: "PROPIEDAD INTELECTUAL"
    },
    {
      codigo: 3,
      descripcion: "REGISTRO DE COMERCIO"
    },
    {
      codigo: 4,
      descripcion: "REGISTRO DE GARANTIAS MOBILIARIAS"
    },
    {
      codigo: 5,
      descripcion: "REGISTRO DE PROPIEDAD RAIZ E HIPOTECA"
    }
  ]

  nombreDepartamento: WritableSignal<string | null> = signal(null)

  misionalSeleccionada: WritableSignal<CatalogoInterface | null> = signal(null);

  flagDatosSeleccionados: boolean = false

  listaCostosNew: CostosResponsetInterface[] = []


  customers!: Customer[];

  ObtenerCostos(){
    this.costosServices.obtenerCostos()
    .pipe(
      catchError((error) => {
          const status = error.status;

          if (status == '400' || status == '404' || status == '500') {
              console.log('EERROR');
              this.flagDatosSeleccionados = false
              // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
          }
          //this.showLoader = false
          return throwError(error.statusText);
      })
  )

  .subscribe((resp) => {
      console.log(resp);
      this.flagDatosSeleccionados = true
      this.listaCostosNew = resp

      //this.ProcesoList.set(resp.respuesta!.datos);
  });
  }

  clear(table: Table) {
    table.clear();
}


  //INSTITUTO GEOGRAFICO Y CATASTRO NACIONAL
  listaCostoIgcnn: CostosMisionalesInterface[] = [
    {
      cantidad_solicitudes: 19,
      costos: "$17.75",
      detalle_costo: {
        almacen: "$15.50",
        combustible: "$20.25",
        electricidad: "$12.75",
        planilla: "$205"
      },
      ingresos: "$1650.75",
      resultado: 25,
      nombre_servicio: "REVISION DE FRACCIONAMIENTO (SEGREGACION)"
    },
    {
      cantidad_solicitudes: 23,
      costos: "$20.25",
      detalle_costo: {
        almacen: "$17.75",
        combustible: "$22.50",
        electricidad: "$15.25",
        planilla: "$240"
      },
      ingresos: "$1900.25",
      resultado: 30,
      nombre_servicio: "UBICACION CATASTRAL"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$15.00",
      detalle_costo: {
        almacen: "$12.75",
        combustible: "$16.50",
        electricidad: "$10.25",
        planilla: "$175"
      },
      ingresos: "$1450.00",
      resultado: 20,
      nombre_servicio: "CERTIFICACION DE LA DENOMINACIÓN CATASTRAL"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$19.50",
      detalle_costo: {
        almacen: "$16.75",
        combustible: "$21.25",
        electricidad: "$14.50",
        planilla: "$225"
      },
      ingresos: "$1750.50",
      resultado: 30,
      nombre_servicio: "REVISION DE PERIMETRO"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$16.25",
      detalle_costo: {
        almacen: "$13.75",
        combustible: "$18.00",
        electricidad: "$11.25",
        planilla: "$190"
      },
      ingresos: "$1550.25",
      resultado: 20,
      nombre_servicio: "REVISION DE FRACCIONAMIENTO (DCD)"
    },
    {
      cantidad_solicitudes: 20,
      costos: "$18.50",
      detalle_costo: {
        almacen: "$16.00",
        combustible: "$20.50",
        electricidad: "$13.75",
        planilla: "$210"
      },
      ingresos: "$1800.50",
      resultado: 30,
      nombre_servicio: "REVISION DE FRACCIONAMIENTO (PARTICION)"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$14.25",
      detalle_costo: {
        almacen: "$12.00",
        combustible: "$16.25",
        electricidad: "$10.50",
        planilla: "$175"
      },
      ingresos: "$1350.25",
      resultado: 20,
      nombre_servicio: "REVISION DE PERIMETRO (REUNION)"
    },
    {
      cantidad_solicitudes: 24,
      costos: "$21.00",
      detalle_costo: {
        almacen: "$18.50",
        combustible: "$22.75",
        electricidad: "$15.25",
        planilla: "$245"
      },
      ingresos: "$1950.00",
      resultado: 30,
      nombre_servicio: "FOTOCOPIA DE PLANO REVISADO"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$16.75",
      detalle_costo: {
        almacen: "$14.25",
        combustible: "$19.00",
        electricidad: "$12.00",
        planilla: "$200"
      },
      ingresos: "$1650.75",
      resultado: 25,
      nombre_servicio: "MAPAS CATASTRALES"
    },
    {
      cantidad_solicitudes: 25,
      costos: "$21.50",
      detalle_costo: {
        almacen: "$19.25",
        combustible: "$23.50",
        electricidad: "$16.00",
        planilla: "$255"
      },
      ingresos: "$2000.50",
      resultado: 30,
      nombre_servicio: "VERTICES GEODESICOS NUEVOS (X,Y,Z) CON ELEVACION ELIPSOIDAL. RECONOCIMIENTO, MONUMENTACION Y MEDICION CON GPS"
    },
    {
      cantidad_solicitudes: 19,
      costos: "$18.00",
      detalle_costo: {
        almacen: "$15.75",
        combustible: "$20.25",
        electricidad: "$13.00",
        planilla: "$215"
      },
      ingresos: "$1700.00",
      resultado: 25,
      nombre_servicio: "POR SECTOR - Escala:VARIABLE - Edicion:NO APLICA - Formato:DIGITAL"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$20.00",
      detalle_costo: {
        almacen: "$17.50",
        combustible: "$21.75",
        electricidad: "$14.50",
        planilla: "$230"
      },
      ingresos: "$1850.00",
      resultado: 30,
      nombre_servicio: "REVISION DE FRACCIONAMIENTO (CONDOMINIO)"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$15.50",
      detalle_costo: {
        almacen: "$13.25",
        combustible: "$17.75",
        electricidad: "$11.00",
        planilla: "$185"
      },
      ingresos: "$1550.50",
      resultado: 20,
      nombre_servicio: "LISTADO DE PARCELARIOS"
    },
    {
      cantidad_solicitudes: 21,
      costos: "$19.00",
      detalle_costo: {
        almacen: "$16.50",
        combustible: "$21.00",
        electricidad: "$14.00",
        planilla: "$220"
      },
      ingresos: "$1800.00",
      resultado: 25,
      nombre_servicio: "VERTICES GEODESICOS NUEVOS (X,Y,Z) CON NIVELACION SNMM. RECONOCIMIENTO, MONUMENTACION Y MEDICION CON GPS - Escala:NO APLICA - Edicion:NO APLICA - Formato:DIGITAL-IMPRESO"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$13.50",
      detalle_costo: {
        almacen: "$11.25",
        combustible: "$15.75",
        electricidad: "$9.75",
        planilla: "$170"
      },
      ingresos: "$1400.75",
      resultado: 20,
      nombre_servicio: "MEDICION DE ANTENAS DE TELEFONIA CELULAR (X,Y,Z) CON ELEVACION ELIPSOIDAL. RECONOCIMIENTO, MONUMENTACION Y MEDICION CON GPS - Escala:NO APLICA - Edicion:NO APLICA - Formato:DIGITAL-IMPRESO"
    }
  ]
  
  //Propiedad intelectual
  listaCostoPi: CostosMisionalesInterface[] = [
    {
      cantidad_solicitudes: 20,
      costos: "$15.25",
      detalle_costo: {
        almacen: "$12.50",
        combustible: "$18.75",
        electricidad: "$10.00",
        planilla: "$200"
      },
      ingresos: "$1800.50",
      resultado: 25,
      nombre_servicio: "SOLICITUD DE REGISTRO / CLASE MARCA"
    },
    {
      cantidad_solicitudes: 10,
      costos: "$12.75",
      detalle_costo: {
        almacen: "$10.00",
        combustible: "$14.50",
        electricidad: "$8.25",
        planilla: "$175"
      },
      ingresos: "$1200.25",
      resultado: 15,
      nombre_servicio: "SOLICITUD DE RENOVACION"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$18.50",
      detalle_costo: {
        almacen: "$15.25",
        combustible: "$20.00",
        electricidad: "$12.75",
        planilla: "$225"
      },
      ingresos: "$1600.75",
      resultado: 20,
      nombre_servicio: "BUSQUEDA FONETICA"
    },
    {
      cantidad_solicitudes: 12,
      costos: "$10.00",
      detalle_costo: {
        almacen: "$8.75",
        combustible: "$12.50",
        electricidad: "$6.25",
        planilla: "$150"
      },
      ingresos: "$1000.00",
      resultado: 15,
      nombre_servicio: "SOLICITUDES DE EXAMEN DE FONDO"
    },
    {
      cantidad_solicitudes: 25,
      costos: "$20.00",
      detalle_costo: {
        almacen: "$18.25",
        combustible: "$22.50",
        electricidad: "$16.25",
        planilla: "$250"
      },
      ingresos: "$2000.00",
      resultado: 30,
      nombre_servicio: "SOLICITUD DE TRASPASO DE DERECHO"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$16.25",
      detalle_costo: {
        almacen: "$14.50",
        combustible: "$18.75",
        electricidad: "$11.25",
        planilla: "$190"
      },
      ingresos: "$1500.50",
      resultado: 20,
      nombre_servicio: "SOLICITUD DE REGISTRO / CLASE NOMBRE COMERCIAL"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$19.25",
      detalle_costo: {
        almacen: "$16.50",
        combustible: "$21.25",
        electricidad: "$14.75",
        planilla: "$230"
      },
      ingresos: "$1700.25",
      resultado: 25,
      nombre_servicio: "SOLICITUDES MULTISERVICIOS"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$17.50",
      detalle_costo: {
        almacen: "$14.75",
        combustible: "$19.50",
        electricidad: "$13.00",
        planilla: "$180"
      },
      ingresos: "$1300.75",
      resultado: 20,
      nombre_servicio: "ANUALIDADES"
    },
    {
      cantidad_solicitudes: 20,
      costos: "$18.00",
      detalle_costo: {
        almacen: "$15.25",
        combustible: "$20.75",
        electricidad: "$12.50",
        planilla: "$210"
      },
      ingresos: "$1800.00",
      resultado: 30,
      nombre_servicio: "SOLICITUD DE CAMBIO DE DOMICILIO"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$15.75",
      detalle_costo: {
        almacen: "$13.00",
        combustible: "$18.25",
        electricidad: "$10.75",
        planilla: "$200"
      },
      ingresos: "$1500.25",
      resultado: 20,
      nombre_servicio: "BUSQUEDA POR TITULAR"
    },
    {
      cantidad_solicitudes: 24,
      costos: "$20.50",
      detalle_costo: {
        almacen: "$18.75",
        combustible: "$22.00",
        electricidad: "$15.50",
        planilla: "$240"
      },
      ingresos: "$1900.50",
      resultado: 30,
      nombre_servicio: "SOLICITUD DE CAMBIO DE NOMBRE"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$14.75",
      detalle_costo: {
        almacen: "$12.00",
        combustible: "$17.25",
        electricidad: "$9.75",
        planilla: "$180"
      },
      ingresos: "$1400.00",
      resultado: 20,
      nombre_servicio: "SOLICITUD DE REGISTRO / CLASE EXPRESION O SEÑAL DE PUBLICIDAD COMERCIAL"
    },
    {
      cantidad_solicitudes: 26,
      costos: "$21.25",
      detalle_costo: {
        almacen: "$19.50",
        combustible: "$23.75",
        electricidad: "$17.25",
        planilla: "$260"
      },
      ingresos: "$2000.75",
      resultado: 30,
      nombre_servicio: "DEPOSITO DE DERECHO DE AUTOR"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$16.00",
      detalle_costo: {
        almacen: "$13.25",
        combustible: "$18.50",
        electricidad: "$11.00",
        planilla: "$190"
      },
      ingresos: "$1500.00",
      resultado: 25,
      nombre_servicio: "PATENTES DE INVENCION Y MODELOS DE UTILIDAD FASE NACIONAL"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$16.00",
      detalle_costo: {
        almacen: "$13.25",
        combustible: "$18.50",
        electricidad: "$11.00",
        planilla: "$190"
      },
      ingresos: "$1500.00",
      resultado: 25,
      nombre_servicio: "CERTIFICACION LITERAL"
    }
  ]

  //Registro de comercio
  listaCostoRc: CostosMisionalesInterface[] = [
    {
      cantidad_solicitudes: 18,
      costos: "$17.25",
      detalle_costo: {
        almacen: "$14.75",
        combustible: "$19.50",
        electricidad: "$12.25",
        planilla: "$195"
      },
      ingresos: "$1600.25",
      resultado: 20,
      nombre_servicio: "RENOVACION DE MATRICULA DE EMPRESA Y LOCAL, SUCURSAL, AGENCIA (PERSONA JURIDICA)"
    },
    {
      cantidad_solicitudes: 21,
      costos: "$18.75",
      detalle_costo: {
        almacen: "$16.25",
        combustible: "$20.00",
        electricidad: "$13.75",
        planilla: "$215"
      },
      ingresos: "$1700.75",
      resultado: 25,
      nombre_servicio: "RENOVACION DE MATRICULA DE EMPRESA Y LOCAL, SUCURSAL, AGENCIA (PERSONA NATURAL)"
    },
    {
      cantidad_solicitudes: 13,
      costos: "$14.50",
      detalle_costo: {
        almacen: "$12.25",
        combustible: "$16.75",
        electricidad: "$10.50",
        planilla: "$170"
      },
      ingresos: "$1300.50",
      resultado: 15,
      nombre_servicio: "PRESENTACION DE EMPRESA Y LOCAL, SUCURSAL, AGENCIA 1ER VEZ (PERSONA JURIDICA)"
    },
    {
      cantidad_solicitudes: 23,
      costos: "$20.25",
      detalle_costo: {
        almacen: "$18.00",
        combustible: "$22.25",
        electricidad: "$15.00",
        planilla: "$235"
      },
      ingresos: "$1900.25",
      resultado: 30,
      nombre_servicio: "BALANCES"
    },
    {
      cantidad_solicitudes: 19,
      costos: "$17.75",
      detalle_costo: {
        almacen: "$15.50",
        combustible: "$19.75",
        electricidad: "$12.50",
        planilla: "$200"
      },
      ingresos: "$1650.50",
      resultado: 25,
      nombre_servicio: "MODIFICACION DE LA SOCIEDAD"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$16.25",
      detalle_costo: {
        almacen: "$13.75",
        combustible: "$18.00",
        electricidad: "$11.25",
        planilla: "$190"
      },
      ingresos: "$1550.25",
      resultado: 20,
      nombre_servicio: "PRESENTACION DE EMPRESA Y LOCAL, SUCURSAL, AGENCIA 1ER VEZ (PERSONA NATURAL)"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$19.00",
      detalle_costo: {
        almacen: "$16.75",
        combustible: "$21.25",
        electricidad: "$14.00",
        planilla: "$220"
      },
      ingresos: "$1750.00",
      resultado: 30,
      nombre_servicio: "MODIFICACION Y AUMENTO DE CAPITAL"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$15.00",
      detalle_costo: {
        almacen: "$12.75",
        combustible: "$16.50",
        electricidad: "$10.25",
        planilla: "$180"
      },
      ingresos: "$1450.00",
      resultado: 20,
      nombre_servicio: "CONSTITUCION de la Sociedad"
    },
    {
      cantidad_solicitudes: 20,
      costos: "$18.50",
      detalle_costo: {
        almacen: "$16.00",
        combustible: "$20.50",
        electricidad: "$13.75",
        planilla: "$210"
      },
      ingresos: "$1800.50",
      resultado: 30,
      nombre_servicio: "NOMBRAMIENTO DE AUDITOR EXTERNO"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$14.25",
      detalle_costo: {
        almacen: "$12.00",
        combustible: "$16.25",
        electricidad: "$10.50",
        planilla: "$175"
      },
      ingresos: "$1350.25",
      resultado: 20,
      nombre_servicio: "OTORGAMIENTO DE PODER"
    },
    {
      cantidad_solicitudes: 24,
      costos: "$21.00",
      detalle_costo: {
        almacen: "$18.50",
        combustible: "$22.75",
        electricidad: "$15.25",
        planilla: "$245"
      },
      ingresos: "$1950.00",
      resultado: 30,
      nombre_servicio: "BALANCE INICIAL"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$16.75",
      detalle_costo: {
        almacen: "$14.25",
        combustible: "$19.00",
        electricidad: "$12.00",
        planilla: "$200"
      },
      ingresos: "$1650.75",
      resultado: 25,
      nombre_servicio: "CERTIFICACION LITERAL"
    },
    {
      cantidad_solicitudes: 25,
      costos: "$21.50",
      detalle_costo: {
        almacen: "$19.25",
        combustible: "$23.50",
        electricidad: "$16.00",
        planilla: "$255"
      },
      ingresos: "$2000.50",
      resultado: 30,
      nombre_servicio: "CREDENCIAL DE ELECCION DE ADMINISTRADOR UNICO, PROPIETARIO Y SUPLENTE"
    },
    {
      cantidad_solicitudes: 25,
      costos: "$21.50",
      detalle_costo: {
        almacen: "$19.25",
        combustible: "$23.50",
        electricidad: "$16.00",
        planilla: "$255"
      },
      ingresos: "$2000.50",
      resultado: 30,
      nombre_servicio: "CERTIFICACIONES DE BALANCE"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$16.50",
      detalle_costo: {
        almacen: "$14.00",
        combustible: "$18.50",
        electricidad: "$11.50",
        planilla: "$185"
      },
      ingresos: "$1500.25",
      resultado: 20,
      nombre_servicio: "HIPOTECA SOBRE EMPRESA"
    },
  ]


  //REGISTRO DE GARANTIAS MOBILIARIAS
  listaCostoRgm: CostosMisionalesInterface[] = 
  [
    {
      cantidad_solicitudes: 18,
      costos: "$17.25",
      detalle_costo: {
        almacen: "$14.75",
        combustible: "$19.50",
        electricidad: "$12.25",
        planilla: "$195"
      },
      ingresos: "$1600.25",
      resultado: 20,
      nombre_servicio: "INSCRIPCION INICIAL DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 21,
      costos: "$18.75",
      detalle_costo: {
        almacen: "$16.25",
        combustible: "$20.00",
        electricidad: "$13.75",
        planilla: "$215"
      },
      ingresos: "$1700.75",
      resultado: 25,
      nombre_servicio: "MODIFICACION POR VALOR DETERMINADO (MONTO MAXIMO GARANTIZADO)"
    },
    {
      cantidad_solicitudes: 13,
      costos: "$14.50",
      detalle_costo: {
        almacen: "$12.25",
        combustible: "$16.75",
        electricidad: "$10.50",
        planilla: "$170"
      },
      ingresos: "$1300.50",
      resultado: 15,
      nombre_servicio: "CANCELACION TOTAL DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 23,
      costos: "$20.25",
      detalle_costo: {
        almacen: "$17.75",
        combustible: "$22.50",
        electricidad: "$15.25",
        planilla: "$240"
      },
      ingresos: "$1900.25",
      resultado: 30,
      nombre_servicio: "CERTIFICACION LITERAL DE INSCRIPCION"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$16.50",
      detalle_costo: {
        almacen: "$14.00",
        combustible: "$18.50",
        electricidad: "$11.50",
        planilla: "$185"
      },
      ingresos: "$1500.25",
      resultado: 20,
      nombre_servicio: "CONSTANCIA DE SITUACION REGISTRAL DEL DEUDOR"
    },
    {
      cantidad_solicitudes: 19,
      costos: "$17.75",
      detalle_costo: {
        almacen: "$15.50",
        combustible: "$19.75",
        electricidad: "$12.50",
        planilla: "$200"
      },
      ingresos: "$1650.50",
      resultado: 25,
      nombre_servicio: "CERTIFICACION EN EXTRACTO"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$16.25",
      detalle_costo: {
        almacen: "$13.75",
        combustible: "$18.00",
        electricidad: "$11.25",
        planilla: "$190"
      },
      ingresos: "$1550.25",
      resultado: 20,
      nombre_servicio: "SOLICITUD DE CREACION DE USUARIO"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$19.00",
      detalle_costo: {
        almacen: "$16.75",
        combustible: "$21.25",
        electricidad: "$14.00",
        planilla: "$220"
      },
      ingresos: "$1750.00",
      resultado: 30,
      nombre_servicio: "REACTIVACION DE CUENTA DE USUARIO"
    },
    {
      cantidad_solicitudes: 20,
      costos: "$18.50",
      detalle_costo: {
        almacen: "$16.00",
        combustible: "$20.50",
        electricidad: "$13.75",
        planilla: "$210"
      },
      ingresos: "$1800.50",
      resultado: 30,
      nombre_servicio: "CANCELACION PARCIAL DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$14.25",
      detalle_costo: {
        almacen: "$12.00",
        combustible: "$16.25",
        electricidad: "$10.50",
        planilla: "$175"
      },
      ingresos: "$1350.25",
      resultado: 20,
      nombre_servicio: "INICIO DE EJECUCION DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 24,
      costos: "$21.00",
      detalle_costo: {
        almacen: "$18.50",
        combustible: "$22.75",
        electricidad: "$15.25",
        planilla: "$245"
      },
      ingresos: "$1950.00",
      resultado: 30,
      nombre_servicio: "CERTIFICACION DE FORMULARIO DE EJECUCION INICIAL DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$16.75",
      detalle_costo: {
        almacen: "$14.25",
        combustible: "$19.00",
        electricidad: "$12.00",
        planilla: "$200"
      },
      ingresos: "$1650.75",
      resultado: 25,
      nombre_servicio: "TERMINACION DE EJECUCION DE LA GARANTIA"
    },
    {
      cantidad_solicitudes: 25,
      costos: "$21.50",
      detalle_costo: {
        almacen: "$19.25",
        combustible: "$23.50",
        electricidad: "$16.00",
        planilla: "$255"
      },
      ingresos: "$2000.50",
      resultado: 30,
      nombre_servicio: "MODIFICACION POR VALOR INDETERMINADO"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$15.00",
      detalle_costo: {
        almacen: "$12.75",
        combustible: "$16.50",
        electricidad: "$10.25",
        planilla: "$180"
      },
      ingresos: "$1450.00",
      resultado: 20,
      nombre_servicio: "OTRAS CERTIFICACIONES"
    },
  ]
  

  //REGISTRO DE PROPIEDAD RAICES E HIPOTECAS
  listaCostoRprh: CostosMisionalesInterface[] = [
    {
      cantidad_solicitudes: 20,
      costos: "$18.25",
      detalle_costo: {
        almacen: "$15.75",
        combustible: "$20.50",
        electricidad: "$13.25",
        planilla: "$210"
      },
      ingresos: "$1750.25",
      resultado: 30,
      nombre_servicio: "COMPRAVENTA"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$14.50",
      detalle_costo: {
        almacen: "$12.25",
        combustible: "$17.00",
        electricidad: "$10.75",
        planilla: "$180"
      },
      ingresos: "$1450.50",
      resultado: 20,
      nombre_servicio: "CONSTITUCION DE HIPOTECA ABIERTA"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$16.75",
      detalle_costo: {
        almacen: "$14.50",
        combustible: "$19.25",
        electricidad: "$12.00",
        planilla: "$195"
      },
      ingresos: "$1600.75",
      resultado: 25,
      nombre_servicio: "CONSTITUCION DE HIPOTECA"
    },
    {
      cantidad_solicitudes: 22,
      costos: "$20.00",
      detalle_costo: {
        almacen: "$17.25",
        combustible: "$21.75",
        electricidad: "$14.50",
        planilla: "$225"
      },
      ingresos: "$1800.00",
      resultado: 30,
      nombre_servicio: "CANCELACION DE HIPOTECA"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$14.75",
      detalle_costo: {
        almacen: "$12.50",
        combustible: "$17.25",
        electricidad: "$10.75",
        planilla: "$185"
      },
      ingresos: "$1500.75",
      resultado: 20,
      nombre_servicio: "CERTIFICACION EXTRACTADA"
    },
    {
      cantidad_solicitudes: 19,
      costos: "$17.25",
      detalle_costo: {
        almacen: "$15.00",
        combustible: "$19.75",
        electricidad: "$11.50",
        planilla: "$200"
      },
      ingresos: "$1650.25",
      resultado: 25,
      nombre_servicio: "DONACION"
    },
    {
      cantidad_solicitudes: 23,
      costos: "$20.50",
      detalle_costo: {
        almacen: "$18.25",
        combustible: "$22.75",
        electricidad: "$15.25",
        planilla: "$235"
      },
      ingresos: "$1900.50",
      resultado: 30,
      nombre_servicio: "SEGREGACION POR VENTA"
    },
    {
      cantidad_solicitudes: 17,
      costos: "$15.75",
      detalle_costo: {
        almacen: "$13.50",
        combustible: "$18.25",
        electricidad: "$11.00",
        planilla: "$190"
      },
      ingresos: "$1550.75",
      resultado: 20,
      nombre_servicio: "CERTIFICACION LITERAL"
    },
    {
      cantidad_solicitudes: 21,
      costos: "$19.25",
      detalle_costo: {
        almacen: "$16.75",
        combustible: "$21.50",
        electricidad: "$14.25",
        planilla: "$220"
      },
      ingresos: "$1750.25",
      resultado: 25,
      nombre_servicio: "TRASPASO POR HERENCIA"
    },
    {
      cantidad_solicitudes: 14,
      costos: "$13.75",
      detalle_costo: {
        almacen: "$11.50",
        combustible: "$16.25",
        electricidad: "$9.50",
        planilla: "$170"
      },
      ingresos: "$1400.75",
      resultado: 20,
      nombre_servicio: "VENTA DE DERECHO"
    },
    {
      cantidad_solicitudes: 24,
      costos: "$21.25",
      detalle_costo: {
        almacen: "$18.75",
        combustible: "$23.00",
        electricidad: "$15.75",
        planilla: "$240"
      },
      ingresos: "$1950.25",
      resultado: 30,
      nombre_servicio: "MODIFICACION DE HIPOTECA"
    },
    {
      cantidad_solicitudes: 16,
      costos: "$15.00",
      detalle_costo: {
        almacen: "$12.75",
        combustible: "$17.50",
        electricidad: "$11.25",
        planilla: "$185"
      },
      ingresos: "$1550.00",
      resultado: 20,
      nombre_servicio: "EMBARGO"
    },
    {
      cantidad_solicitudes: 20,
      costos: "$18.75",
      detalle_costo: {
        almacen: "$16.25",
        combustible: "$20.75",
        electricidad: "$13.50",
        planilla: "$215"
      },
      ingresos: "$1800.75",
      resultado: 30,
      nombre_servicio: "ANOTACION PREVENTIVA"
    },
    {
      cantidad_solicitudes: 15,
      costos: "$14.50",
      detalle_costo: {
        almacen: "$12.25",
        combustible: "$17.00",
        electricidad: "$10.75",
        planilla: "$180"
      },
      ingresos: "$1450.50",
      resultado: 20,
      nombre_servicio: "DACION EN PAGO"
    },
    {
      cantidad_solicitudes: 18,
      costos: "$16.50",
      detalle_costo: {
        almacen: "$14.00",
        combustible: "$19.00",
        electricidad: "$12.25",
        planilla: "$195"
      },
      ingresos: "$1600.50",
      resultado: 25,
      nombre_servicio: "ADJUDICACION EN PAGO"
    }
  ]
  

  listaCostos: CostosMisionalesInterface[] = []



  setMisional(e: any) {
    console.log(e);

    switch (e.codigo) {
      case 1:
      this.listaCostos = this.listaCostoIgcnn
        break;
      case 2:
      this.listaCostos = this.listaCostoPi
        break;
      case 3:
        this.listaCostos = this.listaCostoRc
        break;
      case 4:
        this.listaCostos = this.listaCostoRgm
        break;
      case 5:
        this.listaCostos = this.listaCostoRprh
        break;

      default:
        this.listaCostos = []
        break;
    }    

    this.misionalSeleccionada.set(e)
  }

  departamentoSeleccionado(e:any){
    this.nombreDepartamento.set(e)
  }

  // datosEffect=effect(()=>{
  //   if(this.nombreDepartamento()!=null&&this.misionalSeleccionada()!=null)
  //   {
  //     this.flagDatosSeleccionados = true
  //   }
  // })

}
