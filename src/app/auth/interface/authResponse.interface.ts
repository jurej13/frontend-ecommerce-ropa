
export interface AuthResponse {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    nombre: string;
    correo: string;
    rol:    string;
    estado: boolean;
    uid:    string;
}
