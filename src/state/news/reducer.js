import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_SEARCH_RESULTS:
      return {
        ...state,
        images: {
          ...state.images,
          inProgress: true
        }
      };

    case actions.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        images: {
          ...state.images,
          data: payload.hits,
          inProgress: false
        }
      };

    case actions.GET_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        images: {
          ...state.images,
          inProgress: false,
          error: payload
        }
      };

    default:
      return state;
  }
};
