import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

function DetailedView(){
    const [podnet, setPodnet] = useState();

   let { id } = useParams();

   useEffect(() => {
        const url = `http://localhost:8000/podnety/${id}`      
        axios.get(url)
        .then(response => setPodnet(response.data))
        .catch(error => console.log(error));
   });

   if (podnet == null){
       return <h1>Loading...</h1>;
   }

   return <h1>Loaded!</h1>
}

export default DetailedView;