import { lightGreen } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme? : any) =>({
    container: {
        display: 'flex',
        justifyContent: 'center',
        background:lightGreen[200],
        alignItems: 'center',
        maxHeight: '455px',
        padding: " 53px 10px",
    },
    formContainer:{
        background:'#fff',
        padding: 20,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30
    },

    textFeildCont: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: " 15px 5px",
    },

    textFeild: {
        margin: 10,  
        color:lightGreen[200],

    },
    btnContainer:{
        display: 'flex',
        justifyContent:'space-around',
        marginTop: 20,
    }
}))

export default useStyles