import { ActionType } from "../action-types/index"

interface NewEmployee {
    type: ActionType.NEWEMPLOYEE,
    payload: {
        firstName: string,
        lastName: string,
        age: number,
        jobDescription: string,
        phone: number,
        marital: string,
        address: string,
        // image?: string       
    }
}

interface GetEmployees {
    type: ActionType.GETEMPLOYEES,
    payload: {
        firstName: string,
        lastName: string,
        age: number,
        jobDescription: string,
        phone: number,
        marital: string,
        address: string,
    }[]
}
export type Action =  NewEmployee | GetEmployees;
