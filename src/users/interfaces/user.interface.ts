export interface UserTypes {
  id: string;
  name: string;
  email: string;
  birtday: Date;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  birtday: Date;
  password: string;
  age: number;
}
