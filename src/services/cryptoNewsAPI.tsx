// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
//   headers: {
//     'X-RapidAPI-Key': '4017dd0995mshe1de10309a27848p19b293jsncacbd0fbdf5e',
//     'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsAPIheaders = {
  "X-RapidAPI-Key": "4017dd0995mshe1de10309a27848p19b293jsncacbd0fbdf5e",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};
const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/";
const createRequest = (url: string) => ({ url, headers: cryptoNewsAPIheaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`v1/coindesk`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
