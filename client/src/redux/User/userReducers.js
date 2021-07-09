import { AUTH,LOGOUT,START_LOADING,END_LOADING } from "./userConstants";

const initialState={
   authData:null,
   isLoading:false,
   messageInfo: ''
}

const userReducers = (state=initialState,action)=>{
   switch (action.type) {
       case AUTH:
           localStorage.setItem('profile',JSON.stringify( { ...action?.payload } ))
           return {
              ...state,
              authData: action.payload?.data,
              messageInfo: action.payload.message
           }
        case LOGOUT:
           localStorage.clear();
            return {
                ...state,
                messageInfo:'You are Successfully LogOut',
                authData: null
            } 
         case START_LOADING:
            return {
               ...state,
               isLoading: true
            }
         case END_LOADING:
            return {
               ...state,
               isLoading: false
            }            
       default:
           return state
        
   }
}


export default userReducers;
