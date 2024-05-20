export interface ServiciosResponseInterface {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta?:        Respuesta;
}

export interface Respuesta {
    descripcion: string;
    datos:       DatoServicio[];
}

export interface DatoServicio {
    id:              number;
    metrosCuadrados: number;
    extensiones:     number;
    idDepartamento:  number;
    departamento:    string;
    idMisional:      number;
    misional:        string;
}
