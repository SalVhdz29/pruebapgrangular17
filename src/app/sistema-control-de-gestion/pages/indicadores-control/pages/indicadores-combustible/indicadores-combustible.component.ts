import { Component } from '@angular/core';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'app-indicadores-combustible',
    templateUrl: './indicadores-combustible.component.html',
    styleUrl: './indicadores-combustible.component.css',
})
export class IndicadoresCombustibleComponent {
    listIndicadoresCombustible = [
        {
            'Raiz e Hipoteca': {
                'San Salvador': '$5.785',
                'Santa Ana': '$2.645',
                'Sonsonate': '$4.276',
                'Ahuachapán': '$3.128',
                'Cabañas': '$1.218',
                'Chalatenango': '$7.957',
                'Cuscatlán': '$6.765',
                'La Libertad': '$1.470',
                'La Paz': '$1.230',
                'San Vicente': '$3.942',
                'Usulután': '$1.300',
                'San Miguel': '$1.657',
                'Morazán': '$1.870',
                'La Unión': '$2.070',
            },
            'Catastro': {
                'San Salvador': '$2.265',
                'Santa Ana': null,
                'Sonsonate': null,
                'Ahuachapán': null,
                'Cabañas': null,
                'Chalatenango': null,
                'Cuscatlán': null,
                'La Libertad': null,
                'La Paz': null,
                'San Vicente': null,
                'Usulután': '$2.700',
                'San Miguel': '$6.169',
                'Morazán': '$3.630',
                'La Unión': '$4.080',
            },
            'Registro de Comercio': {
                'San Salvador': null,
                'Santa Ana': null,
                'Sonsonate': null,
                'Ahuachapán': null,
                'Cabañas': null,
                'Chalatenango': null,
                'Cuscatlán': null,
                'La Libertad': null,
                'La Paz': null,
                'San Vicente': null,
                'Usulután': null,
                'San Miguel': null,
                'Morazán': null,
                'La Unión': null,
            },
            'Propiedad Intelectual': {
                'San Salvador': null,
                'Santa Ana': null,
                'Sonsonate': null,
                'Ahuachapán': null,
                'Cabañas': null,
                'Chalatenango': null,
                'Cuscatlán': null,
                'La Libertad': null,
                'La Paz': null,
                'San Vicente': null,
                'Usulután': null,
                'San Miguel': null,
                'Morazán': null,
                'La Unión': null,
            },
            'Garantías Mobiliarias': {
                'San Salvador': null,
                'Santa Ana': null,
                'Sonsonate': null,
                'Ahuachapán': null,
                'Cabañas': null,
                'Chalatenango': null,
                'Cuscatlán': null,
                'La Libertad': null,
                'La Paz': null,
                'San Vicente': null,
                'Usulután': null,
                'San Miguel': null,
                'Morazán': null,
                'La Unión': null,
            },
        },
    ];

    departamentos = [
        'San Salvador',
        'Santa Ana',
        'Sonsonate',
        'Ahuachapán',
        'Cabañas',
        'Chalatenango',
        'Cuscatlán',
        'La Libertad',
        'La Paz',
        'San Vicente',
        'Usulután',
        'San Miguel',
        'Morazán',
        'La Unión',
    ];

    headers: string[] = [''];

    options: any;

    optionsBarras: any;

    data: any;

    datosPorDepartamento: any = []

    totalesPorDepartamento: any = []

    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        this.optionsBarras = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };

        for (let i = 0; i < this.listIndicadoresCombustible.length; i++) {
            const objeto = this.listIndicadoresCombustible[i];
            let contador = 0

            for(var key in objeto)
            {
                this.headers.push(key)
            }

            for(let j of this.departamentos)
            {
                let nombre_departamento:any = this.departamentos[contador]

                contador++

                let datos:string[] = []

                if(nombre_departamento==='San Salvador')
                {
                    datos.push(objeto['Raiz e Hipoteca']['San Salvador']?objeto['Raiz e Hipoteca']['San Salvador']:'$0.00')

                    datos.push(objeto.Catastro['San Salvador']?objeto.Catastro['San Salvador']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['San Salvador']?objeto['Registro de Comercio']['San Salvador']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['San Salvador']?objeto['Propiedad Intelectual']['San Salvador']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['San Salvador']?objeto['Garantías Mobiliarias']['San Salvador']:'$0.00')
                }
                else if(nombre_departamento==='Santa Ana')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Santa Ana']?objeto['Raiz e Hipoteca']['Santa Ana']:'$0.00')

                    datos.push(objeto.Catastro['Santa Ana']?objeto.Catastro['Santa Ana']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Santa Ana']?objeto['Registro de Comercio']['Santa Ana']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Santa Ana']?objeto['Propiedad Intelectual']['Santa Ana']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Santa Ana']?objeto['Garantías Mobiliarias']['Santa Ana']:'$0.00')
                }
                else if(nombre_departamento==='Sonsonate')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Sonsonate']?objeto['Raiz e Hipoteca']['Sonsonate']:'$0.00')

                    datos.push(objeto.Catastro['Sonsonate']?objeto.Catastro['Sonsonate']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Sonsonate']?objeto['Registro de Comercio']['Sonsonate']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Sonsonate']?objeto['Propiedad Intelectual']['Sonsonate']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Sonsonate']?objeto['Garantías Mobiliarias']['Sonsonate']:'$0.00')
                }
                else if(nombre_departamento==='Ahuachapán')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Ahuachapán']?objeto['Raiz e Hipoteca']['Ahuachapán']:'$0.00')

                    datos.push(objeto.Catastro['Ahuachapán']?objeto.Catastro['Ahuachapán']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Ahuachapán']?objeto['Registro de Comercio']['Ahuachapán']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Ahuachapán']?objeto['Propiedad Intelectual']['Ahuachapán']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Ahuachapán']?objeto['Garantías Mobiliarias']['Ahuachapán']:'$0.00')
                }
                else if(nombre_departamento==='Cabañas')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Cabañas']?objeto['Raiz e Hipoteca']['Cabañas']:'$0.00')

                    datos.push(objeto.Catastro['Cabañas']?objeto.Catastro['Cabañas']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Cabañas']?objeto['Registro de Comercio']['Cabañas']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Cabañas']?objeto['Propiedad Intelectual']['Cabañas']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Cabañas']?objeto['Garantías Mobiliarias']['Cabañas']:'$0.00')
                }
                else if(nombre_departamento==='Chalatenango')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Chalatenango']?objeto['Raiz e Hipoteca']['Chalatenango']:'$0.00')

                    datos.push(objeto.Catastro['Chalatenango']?objeto.Catastro['Chalatenango']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Chalatenango']?objeto['Registro de Comercio']['Chalatenango']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Chalatenango']?objeto['Propiedad Intelectual']['Chalatenango']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Chalatenango']?objeto['Garantías Mobiliarias']['Chalatenango']:'$0.00')
                }
                else if(nombre_departamento==='Cuscatlán')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Cuscatlán']?objeto['Raiz e Hipoteca']['Cuscatlán']:'$0.00')

                    datos.push(objeto.Catastro['Cuscatlán']?objeto.Catastro['Cuscatlán']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Cuscatlán']?objeto['Registro de Comercio']['Cuscatlán']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Cuscatlán']?objeto['Propiedad Intelectual']['Cuscatlán']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Cuscatlán']?objeto['Garantías Mobiliarias']['Cuscatlán']:'$0.00')
                }
                else if(nombre_departamento==='La Libertad')
                {
                    datos.push(objeto['Raiz e Hipoteca']['La Libertad']?objeto['Raiz e Hipoteca']['La Libertad']:'$0.00')

                    datos.push(objeto.Catastro['La Libertad']?objeto.Catastro['La Libertad']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['La Libertad']?objeto['Registro de Comercio']['La Libertad']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['La Libertad']?objeto['Propiedad Intelectual']['La Libertad']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['La Libertad']?objeto['Garantías Mobiliarias']['La Libertad']:'$0.00')
                }
                else if(nombre_departamento==='La Paz')
                {
                    datos.push(objeto['Raiz e Hipoteca']['La Paz']?objeto['Raiz e Hipoteca']['La Paz']:'$0.00')

                    datos.push(objeto.Catastro['La Paz']?objeto.Catastro['La Paz']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['La Paz']?objeto['Registro de Comercio']['La Paz']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['La Paz']?objeto['Propiedad Intelectual']['La Paz']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['La Paz']?objeto['Garantías Mobiliarias']['La Paz']:'$0.00')
                }
                else if(nombre_departamento==='San Vicente')
                {
                    datos.push(objeto['Raiz e Hipoteca']['San Vicente']?objeto['Raiz e Hipoteca']['San Vicente']:'$0.00')

                    datos.push(objeto.Catastro['San Vicente']?objeto.Catastro['San Vicente']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['San Vicente']?objeto['Registro de Comercio']['San Vicente']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['San Vicente']?objeto['Propiedad Intelectual']['San Vicente']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['San Vicente']?objeto['Garantías Mobiliarias']['San Vicente']:'$0.00')
                }
                else if(nombre_departamento==='Usulután')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Usulután']?objeto['Raiz e Hipoteca']['Usulután']:'$0.00')

                    datos.push(objeto.Catastro['Usulután']?objeto.Catastro['Usulután']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Usulután']?objeto['Registro de Comercio']['Usulután']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Usulután']?objeto['Propiedad Intelectual']['Usulután']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Usulután']?objeto['Garantías Mobiliarias']['Usulután']:'$0.00')
                }
                else if(nombre_departamento==='San Miguel')
                {
                    datos.push(objeto['Raiz e Hipoteca']['San Miguel']?objeto['Raiz e Hipoteca']['San Miguel']:'$0.00')

                    datos.push(objeto.Catastro['San Miguel']?objeto.Catastro['San Miguel']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['San Miguel']?objeto['Registro de Comercio']['San Miguel']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['San Miguel']?objeto['Propiedad Intelectual']['San Miguel']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['San Miguel']?objeto['Garantías Mobiliarias']['San Miguel']:'$0.00')
                }
                else if(nombre_departamento==='Morazán')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Morazán']?objeto['Raiz e Hipoteca']['Morazán']:'$0.00')

                    datos.push(objeto.Catastro['Morazán']?objeto.Catastro['Morazán']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['Morazán']?objeto['Registro de Comercio']['Morazán']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['Morazán']?objeto['Propiedad Intelectual']['Morazán']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['Morazán']?objeto['Garantías Mobiliarias']['Morazán']:'$0.00')
                }
                else if(nombre_departamento==='La Unión')
                {
                    datos.push(objeto['Raiz e Hipoteca']['La Unión']?objeto['Raiz e Hipoteca']['La Unión']:'$0.00')

                    datos.push(objeto.Catastro['La Unión']?objeto.Catastro['La Unión']:'$0.00')

                    datos.push(objeto['Registro de Comercio']['La Unión']?objeto['Registro de Comercio']['La Unión']:'$0.00')

                    datos.push(objeto['Propiedad Intelectual']['La Unión']?objeto['Propiedad Intelectual']['La Unión']:'$0.00')

                    datos.push(objeto['Garantías Mobiliarias']['La Unión']?objeto['Garantías Mobiliarias']['La Unión']:'$0.00')
                }
                this.datosPorDepartamento.push(datos)
            }
        }

        let totales = []

        for(let i of this.datosPorDepartamento)
        {
            

            let total = 0


            for(let j of i)
            {
                let cantidadSinDolar = parseFloat(j.replace(/\$/g, ''))


                total = total + cantidadSinDolar
            }

            totales.push(total)
            
        }


        this.data = {
            labels: this.departamentos,
            datasets: [
                {
                    label: 'Totales',
                    data: totales,
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--pink-500'),
                    documentStyle.getPropertyValue('--primary-200'),documentStyle.getPropertyValue('--indigo-500'),documentStyle.getPropertyValue('--purple-500'),documentStyle.getPropertyValue('--teal-500'),documentStyle.getPropertyValue('--orange-500'),
                    ],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--pink-500'),
                    documentStyle.getPropertyValue('--primary-200'),documentStyle.getPropertyValue('--indigo-500'),documentStyle.getPropertyValue('--purple-500'),documentStyle.getPropertyValue('--teal-500'),documentStyle.getPropertyValue('--orange-500'),
                    ]
                }
            ]
        };
    }
}
