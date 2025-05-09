export enum UserRoleEnum {
  user = 'USER',
  admin = 'ADMIN',
}

export interface IUser {
  email: string;
  password: string;
  role: UserRoleEnum;
}

interface ILocation {
  id?: number;
  name?: string;
  address?: string;
  mapLink?: string;
  iframeSrc?: string;
}