 import { ActionType } from "../action-types/index"
 import { Action } from "../actions";

export interface RState {
    roomDetails: {
      moveOutDate: string,
      id: number,
      address: string,
      rooms: number,
      location: string,
      lastOccupant: string,
      uId: number,
      balance: number
    }[]
  }


const initialState: RState['roomDetails'] = [
  {
    moveOutDate: 'string',
    id: 10,
    address: 'string',
    rooms: 0,
    location: 'string',
    lastOccupant: 'string',
    uId: 0,
    balance: 0
  },
  {
    moveOutDate: 'string',
    id: 0,
    address: 'string',
    rooms: 0,
    location: 'string',
    lastOccupant: 'string',
    uId: 0,
    balance: 0
  },
  {
    moveOutDate: 'string',
    id: 1013,
    address: 'string',
    rooms: 0,
    location: 'string',
    lastOccupant: 'string',
    uId: 0,
    balance: 0
  }
]
const reducer = (state: RState['roomDetails'] = initialState, action: Action) => {
    switch (action.type) {
      //   case ActionType.GETROOMS:
      //       return action.payload
        
      case ActionType.FLIPROOM:
        const moveUp = action.payload
        const newState = state.filter((room) => room.id !== action.payload.id)
        newState.unshift(moveUp)        
      return newState  
      
        default:
          return  state
    }
}

export default reducer