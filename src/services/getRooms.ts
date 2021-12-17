import data from "./data/data.json";

interface GetRooms {
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

const rooms: GetRooms["rooms"] = data.rooms;

export const getRooms = () => {
  return rooms;
};
