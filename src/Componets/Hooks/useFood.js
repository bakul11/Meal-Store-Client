import React, { useState, useEffect } from 'react';

const useFood = () => {
    const [food, setFood] = useState([]);
    const [loader, setLoader] = useState(true);

    // Load Food from Server Site 
    useEffect(() => {
        fetch('https://salty-bastion-66163.herokuapp.com/allfood', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFood(data);
                setLoader(false);
            })
    }, [food])
    return [food, setFood, loader];
}

export default useFood;