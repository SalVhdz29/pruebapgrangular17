import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-mapa-principal',
    templateUrl: './mapa-principal.component.html',
    styleUrl: './mapa-principal.component.css',
})
export class MapaPrincipalComponent implements OnDestroy {
    map: any | null = null;
    mapInitialized: boolean = false;
    selectedDepartmentSVG: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        //this.map = L.map(this.mapContainer!.nativeElement);
        this.initMap();
        this.addGeoJSONLayer();
    }

    ngOnDestroy(): void {
        if (this.map != null) {
            this.map.remove();
            this.map = null;
        }
    }

    initMap(): void {
        this.map = L.map('map', {
            center: [13.7942, -88.8965],
            zoom: 8,
            zoomControl: false, // Desactiva los controles de zoom
            dragging: true, // Activa el arrastre del mapa
        });

        // Define límites máximos y mínimos para el zoom
        this.map.setMinZoom(8);
        this.map.setMaxZoom(8); // Establece el zoom mínimo

        // Define límites máximos para evitar que la vista se mueva fuera de El Salvador
        const southWest = L.latLng(13.0745, -90.2141); // Coordenada del suroeste de El Salvador
        const northEast = L.latLng(14.4542, -87.6347); // Coordenada del noreste de El Salvador
        const bounds = L.latLngBounds(southWest, northEast);

        this.map.setMaxBounds(bounds);
        this.map.on('drag', () => {
            this.map.panInsideBounds(bounds, { animate: false });
        });

        this.map.on('zoomend', () => {
            if (this.map.getZoom() < 8) {
                this.map.setZoom(8); // Establece el zoom en 9 si el nivel de zoom es inferior
            }
        });
    }

    addGeoJSONLayer(): void {
        const colors = [
            '#ff0000',
            '#00ff00',
            '#0000ff',
            '#ffff00',
            '#ff00ff',
            '#00ffff',
            '#ff8000',
            '#8000ff',
            '#0080ff',
            '#80ff00',
        ];
        let colorIndex = 0;
        fetch('assets/elsalvadordepartamentoscolor.geojson')
            .then((res) => res.json())
            .then((data) => {
                L.geoJSON(data, {
                    style: (feature) => ({
                        fillColor: colors[colorIndex++ % colors.length],
                        fillOpacity: 0.5,
                        color: '#000000',
                        weight: 1,
                    }),
                    onEachFeature: this.onEachFeature.bind(this),
                }).addTo(this.map);
            });
    }

    onEachFeature(feature: any, layer: any): void {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
            layer.on('click', (e: any) => {
                this.selectedDepartmentSVG = this.generateSVG(
                    feature.geometry.coordinates[0]
                );

                this.departamentoSeleccionado(feature.properties.name)
            });
        }
    }

    generateSVG(coordinates: number[][]): string {
        let svgPath = '';

        for (let i = 0; i < coordinates.length; i++) {
            const coords = coordinates[i];
            const command = i === 0 ? 'M' : 'L';
            svgPath += `${command} ${coords[0]} ${coords[1]} `;
        }
        svgPath += 'Z';

        console.log(svgPath);

        return svgPath;
    }

    @Output()
    public departamentoClick = new EventEmitter<string>()

    departamentoSeleccionado(nombre: string){
        this.departamentoClick.emit(nombre)
        
    }

}
