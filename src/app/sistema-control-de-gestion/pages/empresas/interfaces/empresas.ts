export interface EmpresasResponse {
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
    response: Empresa[]
    responseFilter: ResponseFilter
    requestContext: any
    view: any
    template: any
    paddingLength: number
    isPartialRequest: boolean
  }
  
  export interface Headers {}
  
  export interface Options {}
  
  export interface Empresa {
    id: number
    nombre: string
    telefono: string
    direccion: string
  }

  export interface EmpresaResponse {
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
    response: Empresa
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
  
  
