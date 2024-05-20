export interface CostosMisionalesInterface {
    nombre_servicio:      string;
    cantidad_solicitudes: number;
    costos:               string;
    ingresos:             string;
    detalle_costo:        DetalleCosto;
    resultado:            number;
}

export interface DetalleCosto {
    almacen:      string;
    planilla:     string;
    combustible:  string;
    electricidad: string;
}

export interface CostosResponsetInterface {
    proceso: string;
    costeo:  Costeo[];
}

export interface Costeo {
    actividad:        string;
    porcentajeTiempo: number;
    tiempoMinutos:    number;
    ahu:              number;
    cab:              number;
    cha:              number;
    cus:              number;
    lalib:            number;
    lapaz:            number;
    launion:          number;
    moraza:           number;
    sm:               number;
    ss:               number;
    sanvic:           number;
    santaana:         number;
    son:              number;
    usu:              number;
}



