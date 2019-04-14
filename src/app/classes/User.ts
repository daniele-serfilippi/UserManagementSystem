import {UserInterface} from '../interfaces/user';

export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;
}
