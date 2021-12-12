import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export interface EProps {  
      firstName: string,
      lastName: string,
      age: number,
      jobDescription: string,
      phone: number,
      marital: string,
      address: string,
      image?: string
  }

export const getEmployees = () => {
 
    return (dispatch: Dispatch<Action>) => {
        const employees = localStorage.getItem('employees')
        if(employees !== null){
            const res = JSON.parse(employees)
            console.log(employees);
            console.log(res);
            
            dispatch({
                type: ActionType.GETEMPLOYEES,
                payload: res
            })
        }
    }
}

export const newEmployee = (details: EProps) => {
 
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.NEWEMPLOYEE,
            payload: details
        })
    }
}



