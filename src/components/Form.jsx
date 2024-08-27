// src/components/Form.jsx
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [name, setAlt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ lat, long, name });
    };

    return (
        <form onSubmit={handleSubmit} className='card'>
            <label>
                Latitud:
                <input
                    type="text"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Longitud:
                <input
                    type="text"
                    value={long}
                    onChange={(e) => setLong(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setAlt(e.target.value)}
                    
                />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
