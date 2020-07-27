import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

function DetailedView(){
    const [podnet, setPodnet] = useState();

    let { id } = useParams();

    let history = useHistory();

    useEffect(() => {
        const url = `http://localhost:8000/podnety/${id}`      
        axios.get(url)
        .then(response => setPodnet(response.data))
        .catch(error => {
            if (error.response.status === 404) {
                history.push('/404');
            };
        });
   }, [id]);

    if (podnet == null){
       return <h1>Loading...</h1>;
    }

    return (
       <div>
            <h1>{podnet.firstName} {podnet.lastName}</h1>
            <h3>{podnet.uploadDate}</h3>
            <h2>{podnet.adress}</h2>
            <p>{podnet.description}</p>
            <img src={podnet.image} alt='user-uploaded'/>
        </div>
    );
}

export default DetailedView;