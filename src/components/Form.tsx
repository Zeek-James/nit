import { lightGreen } from "@mui/material/colors";
import { Button, TextField, FormControl, styled, MenuItem, InputLabel, Select, SelectChangeEvent, ButtonProps } from '@mui/material'
import React, {ChangeEvent, FC, FormEventHandler, useState} from 'react'
import styles from '../style/form'
import { useDispatch } from 'react-redux'
import { newEmployee } from '../state/action-creators'

export const Form: FC = () => {
    const classes = styles()
    
    const [details, setDetails] = useState({
        image:'',
        firstName: '',
        lastName: '',
        age: 0,
        jobDescription: '',
        phone: 0,
        marital: '',
        address: ''
    })

     const [marital, setMarital] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMarital(event.target.value as string)
    setDetails({
        ...details,
        marital: event.target.value as string
    })
  };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement> ) : void => {
        e.preventDefault()
            setDetails({
                ...details,
                [e.target.name]: e.target.value
            })
    }

    const dispatch = useDispatch()

    const handleSave: FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault()
        dispatch(newEmployee(
            details,
         ))
    setMarital('');

         setDetails({
            image:'',
            firstName: '',
            lastName: '',
            age: 0,
            jobDescription: '',
            phone: 0,
            marital: '',
            address: ''
        })

    }
    
    const handleClear = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setDetails({
            image:'',
            firstName: '',
            lastName: '',
            age: 0,
            jobDescription: '',
            phone: 0,
            marital: '',
            address: ''
        })
        console.log('Zeek');

    }

    return (
        <div className={classes.container}>
            <form className={classes.formContainer} onSubmit={handleSave}>
                {/* <TextField type='text' label='Image' variant='outlined' onChange={handleOnChange} name='image' value={details.image} required  fullWidth className={classes.textFeild}/> */}
                <div className={classes.textFeildCont}>
                    <TextField type='text' label='First Name' variant='outlined' sx={{mr:2 }} onChange={handleOnChange} name='firstName' value={details.firstName} required  className={classes.textFeild}/>
                    <TextField type='text' label='Last Name' variant='outlined' onChange={handleOnChange} name='lastName' value={details.lastName} required className={classes.textFeild}/>
                </div>
                <TextField type='number' label='Age' variant='outlined' onChange={handleOnChange} name='age' value={details.age} required fullWidth className={classes.textFeild}/>
                <div></div>
                <div className={classes.textFeildCont}>
                    <TextField type='text' label='Job Description' variant='outlined' sx={{mr:2}} onChange={handleOnChange} name='jobDescription' value={details.jobDescription} required className={classes.textFeild}/>
                    <TextField type='number' label='Phone' variant='outlined'  onChange={handleOnChange} name='phone' value={details.phone} required className={classes.textFeild}/>
                </div>
                <TextField type='text' label='Address' variant='outlined' sx={{mb:2}} onChange={handleOnChange} name='address' value={details.address} required fullWidth className={classes.textFeild}/>

                 <FormControl  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="marital-status-select-label">Marital</InputLabel>
                    <Select
                    labelId="marital-status-select-label"
                    id="marital-select"
                    name='marital' value={marital} required
                    label="Marital Status"
                    onChange={handleChange}
                    >
                        <MenuItem value='Single'>Single</MenuItem>
                        <MenuItem value='Married'>Married</MenuItem>
                        <MenuItem value='Others'>Others</MenuItem>
                    </Select>
                  </FormControl>
                <div className={classes.btnContainer}>
                    <Button  color='success' type='submit' variant='outlined'  sx={{ px:7, mr:0}}  >Save</Button>
                    <ColorButton onClick={handleClear} variant='contained' sx={{ px:5}}  >Clear</ColorButton>
                </div>
            </form>
        </div>
    )
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: lightGreen[400],
  '&:hover': {
    backgroundColor: lightGreen[200],
  },
}));