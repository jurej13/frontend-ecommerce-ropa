import { Usuario } from "src/app/auth/interface/authResponse.interface";

export interface LoginAuth {
    token:   string;
    usuario : Usuario;
}