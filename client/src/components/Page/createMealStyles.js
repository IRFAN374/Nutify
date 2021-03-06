import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
      field:{
        marginTop: '10px',
        marginBottom:'10px',
        display: 'block'
    },
    gridContainer: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
}))

