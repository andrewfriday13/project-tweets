import axios from 'axios';


export const BASE_URL = 'https://64426be176540ce2258bb04c.mockapi.io/users/'
// export const getTweets = axios.get(`${BASE_URL}?page=1&limit=20`)




export const getTweets = async ( page = 1) => {
    const abortConroller = new AbortController()
    const response = await axios.get(
      `${BASE_URL}?limit=3&page=${page}`,
      {signal: abortConroller.signal}
    );
  
    return response.data
  };
  

  export const getAllTweets = async () => {
    const abortConroller = new AbortController()
    const response = await axios.get(
      `${BASE_URL}`,
      {signal: abortConroller.signal}
    );
  
    return response.data
  };





