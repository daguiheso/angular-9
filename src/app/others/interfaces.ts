export interface User {
  ID: number;
  name: string;
  apel: string;
  email: string;
  password: string;
  type: UserType;
}

export enum UserType {
  Administrador,
  Cliente,
  Tecnico,
}
