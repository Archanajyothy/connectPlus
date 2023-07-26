import { GLOBALTYPES } from "./globalTypes";
import { putDataAPI, getDataAPI } from "../../utils/fetchData";

export const POST_MANAGEMENT_TYPES = {
  BLOCK_POST: 'BLOCK_POST',
  UNBLOCK_POST: 'UNBLOCK_POST',
  GET_REPORTED_POSTS: 'GET_REPORTED_POSTS'
};

export const blockPost = (postId, token) => async (dispatch) => {
  try {
    await putDataAPI(`blockPost/${postId}`, postId, token);
    dispatch({ type: POST_MANAGEMENT_TYPES.BLOCK_POST, payload: { postId } });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: 'Post blocked' },
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

export const unblockPost = (postId, token) => async (dispatch) => {
  try {
    await putDataAPI(`unblockPost/${postId}`, postId, token);
    dispatch({ type: POST_MANAGEMENT_TYPES.UNBLOCK_POST, payload: { postId } });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: 'Post unblocked' },
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

export const getReportedPosts = (auth) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await getDataAPI('reportedPosts', auth.token);
    dispatch({ type: POST_MANAGEMENT_TYPES.GET_REPORTED_POSTS, payload: res.data });
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


