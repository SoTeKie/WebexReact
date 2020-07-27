import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import style from '../Stylesheets/Form.module.css';

function ProfileForm(){

    // User inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('adress', adress);
        formData.append('description', description);
        formData.append("image", image, image.name);

        const url = 'http://localhost:8000/podnety/';

        axios.post(url, formData, {
            headers: {
              'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            }
          })
              .then(response => {
                  console.log(response.data);
                  history.push('/view-all');
                })
              .catch(error => console.log(error));
    }

    function handleImageChange(e){
        if (e.target.files.length) {
            setImage(e.target.files[0]);
        } 
    }

    return(
        <form className={style.container} onSubmit={handleSubmit}>
            {/* Names */}
            <label className={style.label}>
                Meno:
                <input type='text' value={firstName} onChange={ e => setFirstName(e.target.value)}/>
            </label>
            <label className={style.label}>
                Priezvisko:
                <input type='text' value={lastName} onChange={ e => setLastName(e.target.value)}/>
            </label>

            {/* Adress */}
            <label className={style.label}>
                Adresa:  
                <input type='text' value={adress} onChange={ e => setAdress(e.target.value)}/>
            </label>

            {/* Description - "PODNET" */}
            <label className={style.label}>
                Popis podnetu:
                <textarea className={style.textarea} value={description} onChange={ e => setDescription(e.target.value)}></textarea>
            </label>

            {/* Image upload - NOT IMPLEMENTED */}
            <input className={style.input} 
                type='file'
                id='upload-button'
                onChange={handleImageChange}
            />

            {/* Submit button */}
            <button className={style.button}>Ulozit</button>
        </form>
    );
}

export default ProfileForm;