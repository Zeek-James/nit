import { Dispatch } from "redux";
import { getRooms as rooms } from "../../services/getRooms";
import { store } from "../../services/store";
import { Type } from "./type";

interface EProps {
  moveOutDate: string;
  id: number;
  address: string;
  rooms: number;
  location: string;
  lastOccupant: string;
  uId: number;
  balance: number;
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

// interface RProps {
//   rooms: {
//     moveOutDate: string;
//     id: number;
//     address: string;
//     rooms: number;
//     location: string;
//     lastOccupant: string;
//     uId: number;
//     balance: number;
//   }[];
// }

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

export const getRooms = () => {
  const payload = rooms();
  const type = Type.GETROOMS;

  return (dispatch: Dispatch<GetRooms>) => {
    setTimeout(() => {
      dispatch({
        type,
        payload,
      });
    }, 1500);
  };
};

export const flipRoom = (details: EProps) => {
  const state = store.getState();
  const rooms = state.rooms;
  const newState = rooms.filter((room) => room.id !== details.id);

  const clonedDetail = {
    ...details,
    rooms: details.rooms + 1,
  };

  newState.unshift(clonedDetail);

  return (dispatch: Dispatch<FlipRoom>) => {
    dispatch({
      type: Type.FLIPROOM,
      payload: newState,
    });
  };
};
