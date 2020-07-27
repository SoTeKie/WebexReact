import React, { useState } from 'react';

function ProfileForm(){

    // User inputs
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [adress, setAdress] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    function handleSubmit(){
        console.log('submitted!')
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
            <textarea placeholder="Popis podnetu" value={description} onChange={ e => setDescription(e.target.value)}></textarea>

            {/* Image upload - NOT IMPLEMENTED */}
            <button>Nahrat obrazok</button>
        </form>
    );
}

export default ProfileForm;