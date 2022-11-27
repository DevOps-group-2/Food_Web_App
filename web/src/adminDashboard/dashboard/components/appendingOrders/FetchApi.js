import {useState, useEffect} from "react";
import * as React from 'react';
import axios from "axios";

function FetchApi(){

    fetch('http://localhost:8080/api/orders')
        .then(res => res.json())
        .then(data => console.log(data))


}
/*   const [posts, setPosts] = useState('')

   //Used to fetch the data
   useEffect = () => {
       getAllOrders();
   }

   const getAllOrders = () => {
       axios.get('https://food-webapp.grp2.diplomportal.dk/api/orders')
           .then(res =>{console.log(res)}).catch(err => {console.log(err)})
   }

   return(
       <div>
           <ul>
               {posts.map(post => <li key={post.idOrder}>{post.idOrder}</li> )
           }
           </ul>
       </div>
   )

}*/

export default FetchApi