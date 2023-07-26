import { GLOBALTYPES } from "./globalTypes";
import { putDataAPI, getDataAPI } from "../../utils/fetchData";

export const USER_MANAGEMENT_TYPES = {
  BLOCK_USER: 'BLOCK_USER',
  UNBLOCK_USER: 'UNBLOCK_USER',
  GET_USERS: 'GET_USERS'
};

export const blockUser = (userId,token) => async (dispatch) => {

  try {
    await putDataAPI(`users/${userId}/block`, userId, token);
    dispatch({ type: USER_MANAGEMENT_TYPES.BLOCK_USER, payload: { userId } });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: 'User blocked' },
    });
  } catch (err) {
    dispatch({ 
      type: GLOBALTYPES.ALERT, 
      payload: {
        error: err.response.data.msg
      } 
    });
  }
};

export const unblockUser = (userId,token) => async (dispatch) => {
  console.log("userid ", userId)
  console.log("auth ", token)

  try {
    await putDataAPI(`users/${userId}/unblock`,userId, token);
    dispatch({ type: USER_MANAGEMENT_TYPES.UNBLOCK_USER, payload: { userId } });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: 'User unblocked' },
    });
  } catch (err) {
    dispatch({ 
      type: GLOBALTYPES.ALERT, 
      payload: {
        error: err.response.data.msg
      } 
    });
  }
};

export const getUsers = (auth) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await getDataAPI('users',auth.token);
    dispatch({ type: USER_MANAGEMENT_TYPES.GET_USERS, payload: res.data });
    dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
  } catch (err) {
    dispatch({ 
      type: GLOBALTYPES.ALERT, 
      payload: {
        error: err.response.data.msg
      } 
    });
  }
};

// Rest of the code
