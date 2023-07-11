
// 1 - Importaciones
import { Action } from '@ngrx/store'
import { User } from '../interfaces/user.interface'

// 2 - Definición del tipo de acción
export const ADD_USER = 'Add user'

// 3 - Creación de la clase tipo AddTask
export class AddUser implements Action {
  readonly type = ADD_USER
  constructor(public payload: User) { }
}

// 4 - Exportación de la acción
export type Actions = AddUser