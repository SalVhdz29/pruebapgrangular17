import { CatalogoInterface } from "src/app/sistema-control-de-gestion/pages/interfaces-generales/interfaces-generales.interfaces";

export interface DatosCargadosList{
    direccion: string,
    numeroRecibo: string,
    monto: number,
    fechaPago: Date,
    misional: CatalogoInterface,
    tipoRecibo: CatalogoInterface,
    usuario: string,
    recurso: string,
    departamento: CatalogoInterface
}