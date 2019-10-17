// @Flow

import Network from "./network";

const API_KEY = `13963982-3211d066b43b7398fce7e0742`;
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export const fetchSearchResultsAPI = (query: string) => {
  return Network.get(`${BASE_URL}&q=${query}`);
};
