export interface DetalleProducto {
    id:         number;
    title:      string;
    price:      number;
    cantidad:   number;
    image:      string;
    category:   string;
}
export interface Producto {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}
export interface Rating {
    rate:  number;
    count: number;
}
