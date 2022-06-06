import React, { useState, useEffect } from 'react';

const useFood = () => {
    const [food, setFood] = useState([]);
    const [loader, setLoader] = useState(true);

    // Load Food from Server Site 
    useEffect(() => {
        fetch('https://floating-dusk-16413.herokuapp.com/allfood')
            .then(res => res.json())
            .then(data => {
                setFood(data);
                setLoader(false);
            })
    }, [food])
    return [food, setFood, loader];
}

export default useFood;