export interface LoginResponseInterface {
    llave:     string;
    caduca:    Date;
    roles:     string[];
    tipoLlave: string;
}

export interface LoginRequestInterface{
    usuario: string;
    contra:  string;
}
