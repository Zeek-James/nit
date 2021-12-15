import { ActionType } from "../action-types/index"

interface FlipRoom {
    type: ActionType.FLIPROOM,
    payload: {
        moveOutDate: string,
        id: number,
        address: string,
        rooms: number,
        location: string,
        lastOccupant: string,
        uId: number,
        balance: number    
    }
}

interface GetRooms {
    type: ActionType.GETROOMS,
    payload: {
        moveOutDate: string,
        id: number,
        Address: string,
        Rooms: number,
        location: string,
        lastOccupant: string,
        uId: number,
        balance: number
    }[]
}
export type Action =  FlipRoom | GetRooms;
