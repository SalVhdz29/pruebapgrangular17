import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-indicadores-combustible',
  templateUrl: './detalle-combustible.component.html',
  styleUrl: '../../indicadores-combustible.component.css'
})
export class DetalleIndicadoresCombustibleComponent {
  listaDetalles = [
    {
      "Raiz e Hipoteca": {
        "Inscribir documentos": {
          "San Salvador": 85.551,
          "Santa Ana": 37.942,
          "Sonsonate": 25.414,
          "Ahuachapán": 20.411,
          "Cabañas": 8.201,
          "Chalatenango": 17.859,
          "Cuscatlán": 10.732,
          "La Libertad": 52.244,
          "La Paz": 23.271,
          "San Vicente": 14.651,
          "Usulután": 26.203,
          "San Miguel": 35.610,
          "Morazán": 10.755,
          "La Unión": 14.712
        },
        "Emitir certificaciones presencial": {
          "San Salvador": 83.518,
          "Santa Ana": 28.985,
          "Sonsonate": 23.896,
          "Ahuachapán": 20.301,
          "Cabañas": 13.177,
          "Chalatenango": 15.488,
          "Cuscatlán": 15.604,
          "La Libertad": 42.521,
          "La Paz": 22.985,
          "San Vicente": 16.902,
          "Usulután": 21.184,
          "San Miguel": 26.840,
          "Morazán": 14.378,
          "La Unión": 17.502
        },
        "Emitir certificaciones en línea": {
          "San Salvador": 13.693,
          "Santa Ana": 3.054,
          "Sonsonate": 2.293,
          "Ahuachapán": 1.956,
          "Cabañas": 1.737,
          "Chalatenango": 2.112,
          "Cuscatlán": 1.458,
          "La Libertad": 7.913,
          "La Paz": 2.850,
          "San Vicente": 1.142,
          "Usulután": 2.782,
          "San Miguel": 3.883,
          "Morazán": 1.484,
          "La Unión": 2.318
        }
      }
    }
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

  datosPorDepartamento: any = []

  ngOnInit(): void {
      for (let i = 0; i < this.listaDetalles.length; i++) {
          const objeto = this.listaDetalles[i];
          let contador = 0

          for(var key in objeto['Raiz e Hipoteca'])
          {
              this.headers.push(key)
          }

          for(let j of this.departamentos)
          {
              let nombre_departamento:any = this.departamentos[contador]

              contador++

              let datos:number[] = []

              if(nombre_departamento==='San Salvador')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['San Salvador']?objeto['Raiz e Hipoteca']['Inscribir documentos']['San Salvador']:0.00)

                    datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Salvador']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Salvador']:0.00)

                    datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Salvador']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Salvador']:0.00)
                }
                else if(nombre_departamento==='Santa Ana')
                {
                    datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Santa Ana']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Santa Ana']:0.00)

                    datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Santa Ana']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Santa Ana']:0.00)
                    
                    datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Santa Ana']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Santa Ana']:0.00)

                }
                else if(nombre_departamento==='Sonsonate')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Sonsonate']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Sonsonate']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Sonsonate']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Sonsonate']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Sonsonate']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Sonsonate']:0.00)

                }
                else if(nombre_departamento==='Ahuachapán')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Ahuachapán']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Ahuachapán']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Ahuachapán']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Ahuachapán']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Ahuachapán']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Ahuachapán']:0.00)

                }
                else if(nombre_departamento==='Cabañas')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Cabañas']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Cabañas']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Cabañas']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Cabañas']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Cabañas']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Cabañas']:0.00)

                }
                else if(nombre_departamento==='Chalatenango')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Chalatenango']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Chalatenango']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Chalatenango']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Chalatenango']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Chalatenango']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Chalatenango']:0.00)

                }
                else if(nombre_departamento==='Cuscatlán')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Cuscatlán']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Cuscatlán']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Cuscatlán']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Cuscatlán']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Cuscatlán']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Cuscatlán']:0.00)

                }
                else if(nombre_departamento==='La Libertad')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['La Libertad']?objeto['Raiz e Hipoteca']['Inscribir documentos']['La Libertad']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Libertad']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Libertad']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Libertad']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Libertad']:0.00)

                }
                else if(nombre_departamento==='La Paz')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['La Paz']?objeto['Raiz e Hipoteca']['Inscribir documentos']['La Paz']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Paz']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Paz']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Paz']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Paz']:0.00)

                }
                else if(nombre_departamento==='San Vicente')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['San Vicente']?objeto['Raiz e Hipoteca']['Inscribir documentos']['San Vicente']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Vicente']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Vicente']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Vicente']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Vicente']:0.00)

                }
                else if(nombre_departamento==='Usulután')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Usulután']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Usulután']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Usulután']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Usulután']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Usulután']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Usulután']:0.00)

                }
                else if(nombre_departamento==='San Miguel')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['San Miguel']?objeto['Raiz e Hipoteca']['Inscribir documentos']['San Miguel']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Miguel']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['San Miguel']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Miguel']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['San Miguel']:0.00)

                }
                else if(nombre_departamento==='Morazán')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['Morazán']?objeto['Raiz e Hipoteca']['Inscribir documentos']['Morazán']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Morazán']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['Morazán']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Morazán']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['Morazán']:0.00)

                }
                else if(nombre_departamento==='La Unión')
                {
                  datos.push(objeto['Raiz e Hipoteca']['Inscribir documentos']['La Unión']?objeto['Raiz e Hipoteca']['Inscribir documentos']['La Unión']:0.00)

                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Unión']?objeto['Raiz e Hipoteca']['Emitir certificaciones presencial']['La Unión']:0.00)
                  
                  datos.push(objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Unión']?objeto['Raiz e Hipoteca']['Emitir certificaciones en línea']['La Unión']:0.00)

                }

              this.datosPorDepartamento.push(datos)
          }
      }
  }
}
