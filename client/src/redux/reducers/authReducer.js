import { TYPES } from "../actions/authAction";

const initialState = {}

const authReducer = (state = initialState, action) => {
    switch(action.types){
        case TYPES.AUTH : 
            return action.payload;
        default :
            return state;
    }
}

export default authReducer