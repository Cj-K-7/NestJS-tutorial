export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserCreateDto {
  name: string;
  email: string;
  password: string;
}
