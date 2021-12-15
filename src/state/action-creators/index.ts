import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export interface EProps {  
    moveOutDate: string,
    id: number,
    address: string,
    rooms: number,
    location: string,
    lastOccupant: string,
    uId: number,
    balance: number
}
  

// export const getRooms = () => {
 
//     return (dispatch: Dispatch<Action>) => {
//         // const employees = localStorage.getItem('employees')
//         // if(employees !== null){
//         //     const res = JSON.parse(employees)
//         //     console.log(employees);
//         //     console.log(res);
            
//             dispatch({
//                 type: ActionType.GETROOMS,
//                 // payload: 'res'
//             })
//         }
//     }
// }

export const flipRoom = (details: EProps) => {
 
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FLIPROOM,
            payload: details
        })
    }
}



