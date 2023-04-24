import { getAllTweets, getTweets } from "GetTweets/GetTweets"
import { Tweet } from "components/Tweet/Tweet"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import css from './Tweets-page.module.css'



export const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [allTweets, setAllTweets] = useState([])


  useEffect(() => {
    getTweets(page).then(data => setTweets(prev => [...prev, ...data]))
    .catch(e => console.log(e))
  }, [page]);

  useEffect(() => {
    getAllTweets().then(res => setAllTweets(res))
  },[])

  const showBtn = allTweets.length === tweets.length

  const showMore = () => {
    setPage(prev => prev + 1);
  };

console.log()
  return (
    <>
    <Link to='/'>
    <button>go home</button>
    </Link>
      <ul className={css.listUser}>
        {tweets.map(({id, twets, user, isFollowing, followers, avatar}) => (
          <Tweet
            id={id}
            user={user}
            key={id}
            twets={twets}
            isFollowing={isFollowing}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </ul>
      
        {!showBtn && <button onClick={showMore}>more</button>}
      
    </>
  );
};
