import axios from 'axios';


export const BASE_URL = 'https://64426be176540ce2258bb04c.mockapi.io/users/'





export const getTweets = async ( page = 1) => {
    const abortConroller = new AbortController()
    const response = await axios.get(
      `${BASE_URL}?limit=3&page=${page}`,
      {signal: abortConroller.signal}
    );
  
    return response.data
  };
  
export const updateTweets = async (id, newFollowersCount,isFollow) => {
    const response = await axios.put(`${BASE_URL}${id}`, {
    followers: newFollowersCount,
    isFollowing: !isFollow 
  });
  return response
}
  
  export const getAllTweets = async () => {
    const abortConroller = new AbortController()
    const response = await axios.get(
      `${BASE_URL}`,
      {signal: abortConroller.signal}
    );
  
    return response.data
  };





