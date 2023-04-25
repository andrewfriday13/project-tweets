import {  updateTweets } from "GetTweets/GetTweets";
import PropTypes from 'prop-types';
import { useState } from "react";
import { ReactSVG } from "react-svg";



import css from './Tweet.module.css'


import picture from '../../image/picture.webp'
import logo from '../../image/Logo.svg'
import line from '../../image/Line.png'
import ellipse from '../../image/Ellipse.svg'
import { changeSvgEllipse } from "ReactSvgFunc/ReactSvg";

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

const buttonClass = isFollow ? css.btnFollow : css.btnUnFollow
    
    return (
        <li className={css.tweet}> 
            <ReactSVG 
                className={css.logo}  
                src={logo}
            />
            <img 
                className={css.line} 
                src={line} alt="elips" 
            />
            <ReactSVG 
                className={css.ellips} 
                src={ellipse} 
                beforeInjection={changeSvgEllipse}
            />

            <img 
                className={css.picture} 
                src={picture} alt="img" 
            />
            <img 
                className={css.avatar} 
                src={avatar} 
                alt={user} 
            />
            <span className={css.tweets}>{formatTwetsNum} tweets</span>
            <span className={css.followers}>{formattedNum} followers</span>
            <button 
                className={buttonClass}
                onClick={handleClick}
            >
                {isFollow ? ' Follow' : "Following"}
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
