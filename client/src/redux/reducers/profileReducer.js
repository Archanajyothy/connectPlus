import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
    loading: false,
    users: [],
    posts: []
}
const profileReducer = (state = initialState,action) => {
    switch(action.type){
        case PROFILE_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case PROFILE_TYPES.GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            };
        case PROFILE_TYPES.RESET_PROFILE:
            return initialState; // Reset the state to the initial state
        default:
            return state;
    }
}

export default profileReducer