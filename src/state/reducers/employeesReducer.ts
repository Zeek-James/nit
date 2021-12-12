 import { ActionType } from "../action-types/index"
import { Action } from "../actions"

export interface EState {
    details: {
      firstName: string,
      lastName: string,
      age: number,
      jobDescription: string,
      phone: number,
      marital: string,
      address: string,
      image?: string
    }[]
  }

const initialState: EState['details'] = []


const reducer = (state: EState['details'] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GETEMPLOYEES:
      return action.payload;
        
    case ActionType.NEWEMPLOYEE:
      const newState = [ action.payload, ...state]
      localStorage.setItem( 'employees', JSON.stringify(newState))
      return newState 
      

    default:
      return state
    }
}

export default reducer