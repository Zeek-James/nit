import { lightGreen } from "@mui/material/colors";
import { AppBar, Toolbar, Typography } from '@mui/material'
import { grey } from "@mui/material/colors";
import React, {FC} from 'react'

interface iH  {
    title: string,
    primary: string
}
export const Header:FC<iH> = ({title, primary}) => {
    return (
        <AppBar 
            sx={{
                background:'#ffffff', 
                height:100, color:grey[200],
                display:'flex',
                justifyContent:'center'
            }}
        >
            <Toolbar>
                <Typography variant='h4' sx={{ px:2, borderRadius:4, background:lightGreen[400], mr:-2}}>
                    {title}
                </Typography>
                <Typography variant='h4' sx={{ p:1, borderRadius:4, background:grey[200], color:lightGreen[400] }}>
                    {primary}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
