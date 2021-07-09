import React ,{ useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

const SnackBarMessage = ({messageInfo,setMessageInfo}) => {
    const [ open, setOpen] = useState(false);
  //  const user = JSON.parse(localStorage.getItem('profile'));
   // const [messageInfo,setMessageInfo] = useState(''); 
   //const {messageInfo} = useSelector((state)=>state.auth);
    console.log("user is: " ,messageInfo);
    // if(messageInfo!==''){
    //   setOpen(true);
    // }
    useEffect(()=>{
       setOpen(true)
    },[messageInfo])
    
    // const handleClick= ()=>{
    //     setOpen(true);
    // }
    const handleClose = (event, reason)=>{
       if(reason === 'clickaway'){
           return;
       }
       setOpen(false);
       setMessageInfo('');
    }
    return (
        <div>
            <Snackbar
               anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={messageInfo}
              action={
                <>
                  <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              }
            />
        </div>
    );
};

export default SnackBarMessage;