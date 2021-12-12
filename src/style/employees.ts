import { makeStyles } from "@mui/styles";


const useStyles: any = makeStyles((theme? : any) =>({
    container: {
        maxHeight: '550px',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        overflowX: 'hidden',
        overflowY: 'scroll',
          '&::-webkit-scrollbar': {
    width: 6
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.50)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,10,0.60)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#C5E1A5',
    outline: '2px solid #999'
  }
    }
}))

export default useStyles