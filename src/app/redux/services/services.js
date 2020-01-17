import axios from "axios";

const API_END_POINT = process.env.REACT_APP_PRODUCT_API;

export const api = {
  fetchData(action) {
    return axios
      .post(API_END_POINT, {
        requests: [
          {
            indexName: "ikea",
            params: `query=${action.keyword}&hitsPerPage=16&page=${action.page}`
          }
        ]
      })
      .then(response => ({ products: response.data.results[0] }))
      .catch(error => ({ error }));
  }
};
