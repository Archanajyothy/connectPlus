import { GLOBALTYPES } from "../actions/globalTypes";
import { USER_MANAGEMENT_TYPES } from "../actions/usermanagementAction";

const initialState = {
  users: [],
};

const usermanagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case USER_MANAGEMENT_TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case USER_MANAGEMENT_TYPES.BLOCK_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload.userId
            ? { ...user, blocked: true }
            : user
        ),
      };
    case USER_MANAGEMENT_TYPES.UNBLOCK_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload.userId
            ? { ...user, blocked: false }
            : user
        ),
      };
    default:
      return state;
  }
};

export default usermanagementReducer;
