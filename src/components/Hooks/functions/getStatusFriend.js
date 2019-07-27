import React, {
    useState,
    useEffect
} from 'react';

export default function getStatusFriend(friendId) {
    console.log("TCL: getStatusFriend -> friendId", friendId)
    const [isOnline, setStatus] = useState(0);
    const [current, setFriendId] = useState(-1);
    console.log("TCL: getStatusFriend -> current", current)

    useEffect(() => {
        // function handleCountChange(count) {
        //     console.log("TCL: handleCountChange -> count", count,friendId)
        //     setStatus( friendId >1);
        // }

        // let id = setInterval(() => {
        //     handleCountChange(Math.floor(Math.random() * 100));
        // }, 5000);
        //return () => clearInterval(id);
        if (current != friendId) {
            setStatus(friendId > 1);
            setFriendId(friendId)
        }

    });

    return isOnline;
}