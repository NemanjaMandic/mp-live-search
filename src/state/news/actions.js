import { createAction } from "redux-actions";

export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const getSearchResults = createAction(GET_SEARCH_RESULTS);

export const GET_SEARCH_RESULTS_SUCCESS = `${GET_SEARCH_RESULTS}_SUCCESS`;
export const getSearchResultsSuccess = createAction(GET_SEARCH_RESULTS_SUCCESS);

export const GET_SEARCH_RESULTS_FAIL = `${GET_SEARCH_RESULTS}_FAIL`;
export const getSearchResultsFail = createAction(GET_SEARCH_RESULTS_FAIL);
