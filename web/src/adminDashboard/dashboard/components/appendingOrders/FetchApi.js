import {useState, useEffect} from "react";
import * as React from 'react';
import axios from "axios";

function FetchApi(){
    const [orders, setOrders] = useState('')

    useEffect = () => {
        getAllOrders();
    }

    const getAllOrders = () => {
        axios.get('http://localhost:8080/api/orders')
            .then((response) =>{
            const allOrders = response.data.idOrders;
            setOrders(allOrders);
        })
            .catch(error => console.error('Error: ${error}'));
    }

    return(
        <div>
            <ul>
                {orders.map(post => <li key={post.id}>{post.id}</li> )
            }
            </ul>
        </div>
    )

}

export default FetchApi