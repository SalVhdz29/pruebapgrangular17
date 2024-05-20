export interface InductoresResponseInterface {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta?:        Respuesta;
}

export interface Respuesta {
    descripcion: string;
    datos:       Datos[];
}

export interface Datos {
    id:          number;
    descripcion: string;
    idActividad: number;
    actividad?:   string;
    eliminado?:   number;
    idServicio?:  null;
    servicio?:    null;
}

export interface InductorResponseInterface {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta:        inductorResponse;
}

export interface inductorResponse {
    descripcion: string;
    datos:       InductorDato;
}

export interface InductorDato {
    id?:          number;
    descripcion: string;
    idActividad: number;
    actividad?:   string;
    eliminado?:   number;
    idServicio?:  null;
    servicio?:    null;
}

export interface InductorRequestInterface {
    descripcion: string;
    idActividad: number;
}




