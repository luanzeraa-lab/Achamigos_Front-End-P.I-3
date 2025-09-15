export interface IUser{
    _id?: number;
    nome: string;
    telefone: string;
    cnpj: string;
    userLogin: string;
    senha: string; 
    email: string; 
    endereco: { cidade: string; rua: string; numero: string }; 
    tipo: string; 
    userStatus: string;
    linkUser: string;
}