import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DetalleProducto, Producto } from '../../interfaces/facturacion';
import { FacturacionService } from '../../services/facturacion.service';
import { Table } from 'primeng/table';


@Component({
    selector: 'app-facturacion',
    templateUrl: './facturacion.component.html',
    styleUrl: './facturacion.component.scss',
})
export class FacturacionComponent implements OnInit {
    categorias: WritableSignal<string[]> = signal([]);
    categoriaSeleccionada: string = '';
    productos: WritableSignal<Producto[]> = signal([]);
    detalles: DetalleProducto[]=[];
    loadingFlg: boolean = false;

    constructor(
        private facturacionServices: FacturacionService,
    ){}

    async ngOnInit() {
        this.obtenerServicios();
    }

    obtenerServicios(){
        //Obteniendo categorias.
        this.loadingFlg=true;
        this.facturacionServices
        .getCategorias()
        .pipe(
            catchError((error) => {
                const status = error.status;

                if (status == '400' || status == '404' || status == '500') {
                    // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                }

                this.loadingFlg = false;
                return throwError(error.statusText);
            })
        ).subscribe((response)=>{
            this.categorias.set(response);
        })

        //Obteniendo productos.
        this.facturacionServices
        .getProductos()
        .pipe(
            catchError((error) => {
                const status = error.status;

                if (status == '400' || status == '404' || status == '500') {
                    // this.messageService.add({ severity: 'error', summary: 'Error al guardar la información', detail: 'Favor contactar al departamento correspondiente' });
                }

                this.loadingFlg = false;
                return throwError(error.statusText);
            })
        ).subscribe((response)=>{
            this.productos.set(response);
            this.loadingFlg = false;
        })

    }

    agregarDetalle( {id, title, price, category, image }:Producto){
        this.detalles.push({
            id, title,
            price, category, image,
            cantidad: 1,
        });

        this.obtenerServicios();
    }

    comprobarProductoDetalle({id}:Producto){
        const resultado = this.detalles.find(i=>i.id==id);
        return !(resultado != null);
    }

    changeCantidadDetalle({id}:DetalleProducto, cantidad:number){
        this.detalles.map(i=>{
            if(i.id == id){
                i.cantidad = cantidad;
            }
        })
    }

    eliminarDetalle({id}:Producto):void{
        const n_detalle = this.detalles.filter(i=>i.id != id);
        this.detalles=n_detalle;
    }

    totalProductos(bandera:string): number{

        if(this.detalles.length == 0){
            return 0;
        }
        if(bandera == 'cantidad'){
            let suma_productos =0;
            this.detalles.map(i=>{
                suma_productos+=i.cantidad;
            })
            return suma_productos;
        }else{
            let total: number = 0;
            this.detalles.map(i=>{
                total+= i.cantidad * i.price;
            });
            console.log('====================================');
            console.log("TOTAL: ",total);
            console.log('====================================');

            return total;
        }
    }

    clear(table: Table) {
        table.clear();
    }
}
