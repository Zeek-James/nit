import {EState} from './Employees'

export interface FState{
        employees:EState['employees'],
    setEmployees: React.Dispatch<React.SetStateAction<EState['employees']>>
}