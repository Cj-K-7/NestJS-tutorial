export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
}

export type CreateUserDto = Omit<User, 'id'>;
