import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipRoom } from '../state/action-creators'
import { RState} from '../state/reducers/roomsReducer'


export const Rooms = () => {

    const dispatch = useDispatch()

//   const rooms = useSelector(state: RState['roomDetails'] => state)
    const rooms = useSelector((state: RState['roomDetails']) => state)

    // const handleFlip = (room) => {

    //     // dispatch(flipRoom())
    //     console.log(room)

    // }

    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Move-out Date</TableCell>
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
                    {rooms.map((room) => {
                return (
                    <TableRow
                        key={room.id}
                    >
                        <TableCell>{room.moveOutDate}</TableCell>
                        <TableCell>{room.id}</TableCell>
                        <TableCell>{room.address}</TableCell>
                        <TableCell>{room.rooms}</TableCell>
                        <TableCell>{room.location}</TableCell>
                        <TableCell>{room.lastOccupant}</TableCell>
                        <TableCell>{room.uId}</TableCell>
                        <TableCell>({room.balance})</TableCell>
                        <TableCell>
                            <Button onClick={()=> {
                                dispatch(flipRoom(room))
                            }}
                                variant='outlined'
                                sx={{textTransform:'none'}}
                            >Flip room</Button>
                        </TableCell>
                    </TableRow>
                )
            })
}
               </TableBody>
            </Table>
        </TableContainer>
    )
}
