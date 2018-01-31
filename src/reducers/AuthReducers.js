import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, VALIDATE_USER } from "../actions/types";



const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    user: null
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case EMAIL_CHANGED:
            console.log('action',action);
            return { ...state, email: action.payload }
            
        case PASSWORD_CHANGED:
            console.log('action',action);
            return { ...state, password: action.payload }  
        
        case VALIDATE_USER:
            return { ...state, loading:true }
            
        case LOGIN_SUCCESS:
            return { ...state, loading:false ,user: action.payload }

        case LOGIN_FAILED:
            return{ ...state, loading: false }



        default:
            return state;

    }
};

