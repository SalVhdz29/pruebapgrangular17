export interface ProcesosResponseInterface {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta?:        Respuesta;
}

export interface Respuesta {
    descripcion: string;
    datos:       DatoProceso[];
}

export interface DatoProceso {
    id:            number;
    descripcion:   string;
    codigo?:        null | string;
    eliminado?:     number;
    tiempoMinutos?: number | null;
}

export interface ProcesosResquestInterface {
    id?:number;
    descripcion:   string;
    codigo:        string;
    tiempoMinutos: number;
}

export interface ProcesoResponsetInterface {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta:        RespuestaProceso;
}

export interface RespuestaProceso {
    descripcion: string;
    datos:       Datos;
}

export interface Datos {
    id:            number;
    descripcion:   string;
    codigo:        string;
    eliminado:     number;
    tiempoMinutos: number;
}

