import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipRoom, getRooms } from "../store/action/action";
import { RState } from "../store/reducer/roomsReducer";

export const Rooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const handleFlip = (r: any) => {
    dispatch(flipRoom(r));
  };

  const rooms: RState["rooms"] = useSelector((state: RState) => state.rooms);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {/* Style the Header adjust font-weight {tickyHeader} */}
          <TableRow>
            <TableCell>
              <Box>Move-out Date</Box>
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Rooms</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Last Occupant</TableCell>
            <TableCell>UID</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map<JSX.Element>((room) => {
            return (
              <TableRow key={room.id}>
                <TableCell size="small">{room.moveOutDate}</TableCell>
                <TableCell size="small">{room.id}</TableCell>
                <TableCell size="small" sx={{ color: lightGreen[600] }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ mr: 2 }} />
                    <Typography>{room.address}</Typography>
                  </Box>
                </TableCell>
                <TableCell size="small">{room.rooms}</TableCell>
                <TableCell size="small">{room.location}</TableCell>
                <TableCell size="small" sx={{ color: lightGreen[600] }}>
                  {room.lastOccupant}
                </TableCell>
                <TableCell size="small">{room.uId}</TableCell>
                <TableCell size="small">({room.balance})</TableCell>
                <TableCell size="small">
                  <Button
                    onClick={() => {
                      handleFlip(room);
                    }}
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                  >
                    Flip room
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
