import { Edit, LocationOn, PhoneAndroid } from '@mui/icons-material';
import { Avatar, Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, {FC} from 'react'
import { EState} from '../state/reducers/employeesReducer'
import styles from '../style/employees'
import { useSelector } from 'react-redux';


export const Employees: FC = () => {
  const classes = styles()
    
  const res = useSelector((state : EState['details']) => state)
    
  const employeeList = (): JSX.Element[] => {     
      
        return (
            res.map((employee, index) => {
                return (                        
                      <Card sx={{
                        width: '70%',
                        minHeight: '200px',
                        p: 2,
                        m:5
                    }}
                    key={index}
                    >
                          <IconButton sx={{ float: 'right' }}>
                            <Edit sx={{ fontSize: 20 }} />
                          </IconButton>
                          <Box sx={{p:4, mt:1 }} >
                            <Box sx={{ display: 'flex' }}>
                              <Box sx={{
                                pb: 2,
                                display: 'flex', 
                                alignItems: 'flex-end', 
                                flex: 1
                              }}>
                                    <Avatar
                                        variant="rounded" 
                                        sx={{
                                              width: 56,
                                              height: 56,
                                              mr:2,
                                              bgcolor: lightGreen[200],
                                              display: { xs: 'none', sm: 'block' },
                                            }}
                                            src= {employee.image}
                                            alt={employee.firstName}
                                          />
                                    <Stack spacing={0.5}>
                                      <Typography fontWeight={700} noWrap>
                                          {employee.firstName} {employee.lastName}
                                      </Typography>
                                      <Typography fontWeight={100}>
                                          {employee.jobDescription}
                                      </Typography>
                                    </Stack>
                              </Box>
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'flex-end',
                              p: 2
                            }}>
                                <Typography variant="body2" color="text.secondary">
                                (+234)  {employee.phone}
                                
                                </Typography>
                                  <PhoneAndroid sx={{color: grey[500]}} /> 
                              </Box>
                            </Box>
                            <Divider />
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ px: 1, mt: 2, 
                              // display: { xs: 'none', sm: 'inline' },
                               }} >
                              <Typography variant="body2" color="text.secondary"                            
                                // sx={{ display: { xs: 'none', sm: 'inline' } }}
                                >
                                <LocationOn sx={{color: grey[500]}} /> 
                                {employee.address}
                              </Typography>
                              <Box
                                sx={{
                                  flex: 1,                                
                                  height: 20,
                                  mx:2,
                                  bgcolor: grey[200],
                                  borderRadius:50
                                }} >
                              </Box>
                              <Stack
                                direction="column"
                                alignItems="flex-end"
                                justifyContent="space-between"
                                sx={{ display: { xs: 'none', sm: 'inline' }}}
                              >
                                <Typography> Age: { employee.age}</Typography>
                                <Typography>{ employee.marital}</Typography>
                              </Stack>
                            </Stack>
                          </Box>
                      </Card>
                )
            })
        )
    }
  
    return (
        <div className={classes.container}>
            {employeeList()}
        </div>
    )
}