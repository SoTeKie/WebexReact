import React, { useState } from 'react';
import axios from 'axios';
import history from '../helpers/history'

function ProfileForm(){

    // User inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();

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
        <form onSubmit={handleSubmit}>
            {/* Names */}
            <label>
                Meno:
                <input type='text' value={firstName} onChange={ e => setFirstName(e.target.value)}/>
            </label>
            <label>
                Priezvisko:
                <input type='text' value={lastName} onChange={ e => setLastName(e.target.value)}/>
            </label>

            {/* Adress */}
            <label>
                Adresa:
                <input type='text' value={adress} onChange={ e => setAdress(e.target.value)}/>
            </label>

            {/* Description - "PODNET" */}
            <textarea placeholder='Popis podnetu' value={description} onChange={ e => setDescription(e.target.value)}></textarea>

            {/* Image upload - NOT IMPLEMENTED */}
            <input 
                type='file'
                id='upload-button'
                onChange={handleImageChange}
            />

            {/* Submit button */}
            <button>Ulozit</button>
        </form>
    );
}

export default ProfileForm;