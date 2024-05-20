import { Injectable, WritableSignal, signal } from '@angular/core';
import { DatosCargadosList } from '../interfaces/cargar-datos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CargarDatosService {

  datosCargados: WritableSignal<DatosCargadosList[]> = signal([])

  constructor() {}



}
