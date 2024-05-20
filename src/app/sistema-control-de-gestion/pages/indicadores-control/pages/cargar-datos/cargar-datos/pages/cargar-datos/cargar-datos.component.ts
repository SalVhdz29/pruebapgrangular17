import { Component } from '@angular/core';
import { CatalogoInterface } from 'src/app/sistema-control-de-gestion/pages/interfaces-generales/interfaces-generales.interfaces';
import { DatosCargadosList } from './interfaces/cargar-datos.interfaces';
import { CargarDatosService } from './services/cargar-datos.service';

@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html',
  styleUrl: './cargar-datos.component.css'
})
export class CargarDatosComponent {
  showModalCargarDatos: boolean = false
  maxDate: Date = new Date();

  //Variables para ingresar nuevos registros
  direccionIngresada: string | null = null;
  numeroReciboIngresado: string | null = null;
  montoIngresado: number | null = null;
  fechaDePagoIngresada: any = null;
  misionalSeleccionada: CatalogoInterface | null = null;
  tipoReciboSeleccionado: CatalogoInterface | null = null;
  usuarioLogueado: string = "usuario_prueba";
  departamentoSeleccionado: CatalogoInterface | null = null;
  formularioCompleto: boolean = false;


  CargarDatosList: DatosCargadosList[] = [];

  //Catalogos
  tipoRecibosList: CatalogoInterface[] = [
    {
      codigo: 1,
      descripcion: "Factura"
    },
    {
      codigo: 2,
      descripcion: "Crédito fiscal"
    },
    {
      codigo: 3,
      descripcion: "Consumidor final"
    }
  ]

  misionalList: CatalogoInterface[] = [
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

  departamentoList: CatalogoInterface[] = [
    {
      codigo: 1,
      descripcion: 'Ahuachapán'
    },
    {
      codigo: 2,
      descripcion: 'Cabañas'
    },
    {
      codigo: 3,
      descripcion: 'Chalatenango'
    },
    {
      codigo: 4,
      descripcion: 'Cuscatlán'
    },
    {
      codigo: 5,
      descripcion: 'La Libertad'
    },
    {
      codigo: 6,
      descripcion: 'Morazán'
    },
    {
      codigo: 7,
      descripcion: 'La Paz'
    },
    {
      codigo: 8,
      descripcion: 'Santa Ana'
    },
    {
      codigo: 9,
      descripcion: 'San Miguel'
    },
    {
      codigo: 10,
      descripcion: 'San Salvador'
    },
    {
      codigo: 11,
      descripcion: 'San Vicente'
    },
    {
      codigo: 12,
      descripcion: 'Sonsonate'
    },
    {
      codigo: 13,
      descripcion: 'La Unión'
    },
    {
      codigo: 14,
      descripcion: 'Usulután'
    }
  ]

  recursosList: CatalogoInterface[] = [
    {
      codigo: 1,
      descripcion: "Planilla"
    },
    {
      codigo: 2,
      descripcion: "Combustible"
    },
    {
      codigo: 3,
      descripcion: "Almacén"
    }
  ]

  recursoSeleccionado: CatalogoInterface | null = null


  constructor(private datosServices: CargarDatosService){}

  ngOnInit(): void {
    this.CargarDatosList = this.datosServices.datosCargados()
    this.fechaDePagoIngresada = this.maxDate
  }

  setTipoRecibo(e:CatalogoInterface){
    this.tipoReciboSeleccionado = e
  }

  setMisional(e: CatalogoInterface){
    this.misionalSeleccionada = e
  }

  setDepartamento(e: CatalogoInterface){
    this.departamentoSeleccionado = e
  }

  setRecurso(e: CatalogoInterface){
    this.recursoSeleccionado = e
  }

  agregarDatos(){
    if(this.direccionIngresada!=null&&this.direccionIngresada!=''&&this.tipoReciboSeleccionado!=null&&this.numeroReciboIngresado!=null&&this.numeroReciboIngresado!=''
    &&this.montoIngresado!=null&&this.misionalSeleccionada!=null&&this.departamentoSeleccionado!=null&&this.recursoSeleccionado!=null)
    {
      this.formularioCompleto = false

      let datos_list: DatosCargadosList[] = [...this.CargarDatosList]

      let datos: DatosCargadosList = {
        direccion: this.direccionIngresada,
        tipoRecibo: this.tipoReciboSeleccionado,
        monto: this.montoIngresado,
        misional: this.misionalSeleccionada,
        departamento: this.departamentoSeleccionado,
        fechaPago: this.fechaDePagoIngresada,
        numeroRecibo: this.numeroReciboIngresado,
        usuario: 'usuario_prueba',
        recurso:  this.recursoSeleccionado.descripcion
      }

      datos_list.push(datos)


      this.CargarDatosList = datos_list

      this.datosServices.datosCargados.set(this.CargarDatosList)

      this.limpiarInputs()
      this.showDialog()

    }
    else{
      this.formularioCompleto = true
    }
  }

  limpiarInputs(){
    this.direccionIngresada = null
    this.numeroReciboIngresado = null
    this.montoIngresado = null
    this.fechaDePagoIngresada = this.maxDate
    this.misionalSeleccionada = null
    this.tipoReciboSeleccionado = null
    this.departamentoSeleccionado = null
  }

  showDialog(){
    if(this.showModalCargarDatos)
    {
      this.formularioCompleto = true
      this.limpiarInputs()
      this.showModalCargarDatos = false
    }
    else{
      this.formularioCompleto = false
      this.showModalCargarDatos = true
    }
  }
}
