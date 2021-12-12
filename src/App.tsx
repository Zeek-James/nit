import React, { FC, ReactElement, useEffect} from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Employees } from './components/Employees';
import { Box, Grid } from '@mui/material';
import styles from './style/App'
import { getEmployees } from './state/action-creators'
import { useDispatch } from "react-redux";

export interface EState {
  employees: {
    firstName: string,
    lastName: string,
    age: number,
    jobDescription: string,
    phone: number,
    marital: string,
    address: string,
    image?: string
  }[]
}

const App : FC = (): ReactElement => {
  const classes= styles()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  return (

    <div>
      <Header title='Prune' primary='TECH' />
      <Box sx={{mt:12}} className={classes.container} >
        <Grid container direction='row-reverse' alignItems='flex-start' >
          <Grid item md={5} xs={12}>
            <Form />
          </Grid>
        <Grid item md={7} xs={12}>
            <Employees />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
