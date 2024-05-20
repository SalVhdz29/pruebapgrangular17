import { Injectable, WritableSignal, signal } from '@angular/core';
import { accesoInterface, rolInterface, usuarioInterface } from '../interfaces/administracion.interfaces';
import { CatalogoInterface } from '../../interfaces-generales/interfaces-generales.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  listaUsuarios: WritableSignal<usuarioInterface[]> = signal([])
  listaRoles: WritableSignal<CatalogoInterface[]> = signal([])
  listaAcceso: WritableSignal<accesoInterface[]> = signal([])

  constructor() { }

}
