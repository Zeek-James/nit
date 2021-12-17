import { Type } from "../action/type";

export interface RState {
  isLoading: boolean;
  rooms: {
    moveOutDate: string;
    id: number;
    address: string;
    rooms: number;
    location: string;
    lastOccupant: string;
    uId: number;
    balance: number;
  }[];
}

interface FlipRoom {
  type: Type.FLIPROOM;
  payload: {
    moveOutDate: string;
    id: number;
    address: string;
    rooms: number;
    location: string;
    lastOccupant: string;
    uId: number;
    balance: number;
  }[];
}

interface GetRooms {
  type: Type.GETROOMS;
  payload: {
    moveOutDate: string;
    id: number;
    address: string;
    rooms: number;
    location: string;
    lastOccupant: string;
    uId: number;
    balance: number;
  }[];
}

const initialState: RState = {
  isLoading: true,
  rooms: [],
};

const reducer = (state: RState = initialState, action: FlipRoom | GetRooms) => {
  switch (action.type) {
    case Type.GETROOMS:
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
      };

    case Type.FLIPROOM:
      return { ...state, rooms: action.payload };

    default:
      return state;
  }
};

export default reducer;
