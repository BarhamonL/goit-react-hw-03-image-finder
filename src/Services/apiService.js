import axios from "axios";

export const quantityPictures = "12";

const fetchPicturesWithQuery = (query, page) => {
  const baseUrl = "https://pixabay.com/api/";
  const key = "16324952-34095f6b5c046a6325f3315db";
  const requestParams = `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${quantityPictures}`;

  return axios.get(baseUrl + requestParams).then((response) => ({
    hits: response.data.hits,
    totalHits: response.data.totalHits,
  }));
};

export default {
  fetchPicturesWithQuery,
};
