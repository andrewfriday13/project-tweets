import {  updateTweets } from "GetTweets/GetTweets";
import PropTypes from 'prop-types';
import { useState } from "react";
import { ReactSVG } from "react-svg";



import css from './Tweet.module.css'


import img from '../../image/picture2.png'
import logo from '../../image/Logo.svg'

export const Tweet = ({ id, twets, followers, isFollowing,user, avatar }) => {
    const [isFollow, setIsFollow] = useState(isFollowing);
    const [countFollowers, setCountFollowers] = useState(followers);


    const handleClick = async () => { 
        const newFollowersCount = isFollow ? countFollowers - 1 : countFollowers + 1;
        setIsFollow(!isFollow);
        setCountFollowers(newFollowersCount);
        updateTweets(id, newFollowersCount, isFollow)
    };

    const formattedNum = countFollowers.toLocaleString('en-US');
    const formatTwetsNum = twets.toLocaleString('en-US');


    return (
        <li className={css.tweet}> 
            <ReactSVG className={css.logo} src={logo} />
            <img 
            className={css.ellips} 
            src={img} alt="elips" 
            />
            <img 
            className={css.avatar} 
            src={avatar} 
            alt={user} 
            />
            <span>{formatTwetsNum} tweets</span>
            <span>{formattedNum} followers</span>
            <button className={css.btnfollow}
                style={{
                    backgroundColor: isFollow ? 'red' : 'yellow', 
                    color: isFollow ? 'black' : 'green' }}
                onClick={handleClick}
            >
                {isFollow ? ' Following' : "Follow"}
            </button>
        </li>
    );
};

Tweet.propTypes = {
    id: PropTypes.string.isRequired,
    twets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};
