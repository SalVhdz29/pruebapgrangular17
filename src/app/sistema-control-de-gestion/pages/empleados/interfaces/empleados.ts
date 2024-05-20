export interface EmpleadosResponse {
    responseText: any
    responseStream: any
    fileInfo: any
    virtualFile: any
    contentType: any
    headers: Headers
    cookies: any[]
    eTag: any
    age: any
    maxAge: any
    expires: any
    lastModified: any
    cacheControl: number
    resultScope: any
    allowsPartialResponse: boolean
    options: Options
    status: number
    statusCode: number
    statusDescription: any
    response: Empleado[]
    responseFilter: ResponseFilter
    requestContext: any
    view: any
    template: any
    paddingLength: number
    isPartialRequest: boolean
  }
  
  export interface Headers {}
  
  export interface Options {}
  
  export interface Empleado {
    id: number
    idPersona: number
    nombreEmpleado: string
    idEmpresa: number
    nombreEmpresa: string
    fechaContrato: string
    fechaFinContrato?: string
  }
  
  export interface ResponseFilter {}
  

  export interface EmpleadoResponse {
    responseText: any
    responseStream: any
    fileInfo: any
    virtualFile: any
    contentType: any
    headers: Headers
    cookies: any[]
    eTag: any
    age: any
    maxAge: any
    expires: any
    lastModified: any
    cacheControl: number
    resultScope: any
    allowsPartialResponse: boolean
    options: Options
    status: number
    statusCode: number
    statusDescription: any
    response: Empleado
    responseFilter: ResponseFilter
    requestContext: any
    view: any
    template: any
    paddingLength: number
    isPartialRequest: boolean
  }
  
  export interface Headers {}
  
  export interface Options {}
  
  export interface ResponseFilter {}
  