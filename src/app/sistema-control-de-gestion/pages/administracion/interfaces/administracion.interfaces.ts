import { CatalogoInterface } from "../../interfaces-generales/interfaces-generales.interfaces";

export interface usuarioInterface{
    nombreUsuario: string,
    fechaCreacion: Date,
    estado: boolean,
    rol: CatalogoInterface
}

export interface rolInterface{
    nombre: string,
    estado: boolean
}

export interface accesoInterface{
    nombre: string,
    estado: boolean,
    rutaAcceso: string,
}