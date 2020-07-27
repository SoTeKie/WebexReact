import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import history from '../helpers/history';
import axios from 'axios';

function ListAll(){

    const [podnety, setPodnety] = useState();

    useEffect(() => {
        const url = 'http://localhost:8000/podnety/'
        axios.get(url)
        .then(response => setPodnety(response.data))
        .catch(error => console.log(error));
    }, [])

    if (podnety == null){
        return(
            <h1>Loading...</h1>
        );
    };

    return(
       podnety.map( podnet => <Podnet key={podnet.id} podnet={podnet}/>)
    ); 
}

function Podnet(props){
    return(
        <Link to={`/view/${props.podnet.id}`}>
            <h1>{props.podnet.firstName} {props.podnet.lastName}</h1>
            <h2>{props.podnet.adress}</h2>
            <img src={props.podnet.image} alt='User-uploaded' />
            <hr />
        </Link>
    );
}

export default ListAll;