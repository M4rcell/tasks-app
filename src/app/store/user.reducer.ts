// 1 - Importaciones
import { User } from '../interfaces/user.interface';
import * as UserActions from './user.actions'



// 2 - Estado inicial
const initialState: User = {
  user: 'admin',
  password: 'admin'
}

// 3 - Switch con las funciones puras
export function userReducer(state: User[] = [], action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}