import { EMAIL_CHANGED, PASSWORD_CHANGED, VALIDATE_USER, LOGIN_FAILED, LOGIN_SUCCESS }  from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };  
};

export const validateUser = ({email,password}) => {
    return (dispatch) => {
            dispatch({type: VALIDATE_USER});

            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(user=>loginUserSuccess(dispatch,user))
                .catch((error)=>{
                    console.log("error from action :",error);
                    loginUserFailed(dispatch);
            
            });
        
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({type: LOGIN_FAILED});
};

const loginUserSuccess = (dispatch,user) => {
    console.log("sucsses user", user);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    
    
    });
};


