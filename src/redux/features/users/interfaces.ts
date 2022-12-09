export interface IInitialState {
  users: User[];
  formUserValues: any;
}

export interface User {
  name: string;
  lastName: string;
  company: string;
  email: string;
}
