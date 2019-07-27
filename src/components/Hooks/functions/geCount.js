import React, {
    useState,
    useEffect
} from 'react';

export default function getCount(status) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        function handleCountChange(count) {
            setCount(count);
        }

        // setInterval(() => {
        //     handleCountChange(count + 1)
        // }, 3000)
    });

    return count;
}