import { GLOBALTYPES } from "../actions/globalTypes";
import { POST_MANAGEMENT_TYPES } from "../actions/postmanagementAction";

const initialState = {
  reportedPosts: [],
};

const postmanagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case POST_MANAGEMENT_TYPES.GET_REPORTED_POSTS:
      return {
        ...state,
        reportedPosts: action.payload,
      };
    case POST_MANAGEMENT_TYPES.BLOCK_POST:
      return {
        ...state,
        reportedPosts: state.reportedPosts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, blocked: true }
            : post
        ),
      };
    case POST_MANAGEMENT_TYPES.UNBLOCK_POST:
      return {
        ...state,
        reportedPosts: state.reportedPosts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, blocked: false }
            : post
        ),
      };
    default:
      return state;
  }
};

export default postmanagementReducer;
