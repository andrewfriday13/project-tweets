import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { BASE_URL } from "GetTweets/GetTweets";

export const Tweet = ({ id, user, followers, isFollowing, avatar }) => {
    const [isFollow, setIsFollow] = useState(isFollowing);
    const [countFollowers, setCountFollowers] = useState(followers);

    const handleClick = async () => { 

        const newFollowersCount = isFollow ? countFollowers - 1 : countFollowers + 1;
        setIsFollow(!isFollow);
        setCountFollowers(newFollowersCount);
        
        try {
            const response = await axios.put(`${BASE_URL}${id}`, {
                followers: newFollowersCount,
                isFollowing: !isFollow 
            });
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There was a problem updating the data:', error);
        } 
    };

    const formattedNum = countFollowers.toLocaleString();

    return (
        <li>
            {/* <img src={avatar} alt={user} /> */}
            <span>{user}</span>
            <span>{formattedNum}</span>
            <button
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
    user: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};
