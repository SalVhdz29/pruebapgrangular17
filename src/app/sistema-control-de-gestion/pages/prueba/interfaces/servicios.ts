
export interface Response {
    httpCodigoEstado: string;
    mensaje:          string;
    respuesta:        Respuesta;
}

export interface Respuesta {
    descripcion: string;
    datos:       Dato[];
}

export interface Dato {
    id:          number;
    descripcion: string;
    idActividad: number;
    actividad:   string;
    eliminado:   number;
    idServicio:  null;
    servicio:    null;
}

export class Convert {
    public static toResponse(json: string): Response {
        return JSON.parse(json);
    }

    public static responseToJson(value: Response): string {
        return JSON.stringify(value);
    }
}
