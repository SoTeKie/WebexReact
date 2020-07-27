import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cntStyle from '../Stylesheets/Center.module.css';
import style from '../Stylesheets/List.module.css';

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
            <div className={cntStyle.centered}>
                <h1>Loading...</h1>
            </div>
        );
    };
    
    if (podnety.length === 0){
        return(
            <div className={cntStyle.centered}>
                <h1>Nie su nacitane ziadne podnety</h1>
            </div>
        )
    }

    return(
       podnety.map( podnet => <Podnet key={podnet.id} podnet={podnet}/>)
    ); 
}

function Podnet(props){
    return(
        <Link style={{textDecoration: "none"}} to={`/view/${props.podnet.id}/`}>
            <div className={style.container}>        
                <h1 className={style.text}>{props.podnet.firstName + ' ' + props.podnet.lastName}</h1>
                <h2 className={style.text}>{props.podnet.adress}</h2>
                <img className={style.image} src={props.podnet.image} alt='User-uploaded' />
            </div>
            <hr />
        </Link>
    );
}

export default ListAll;