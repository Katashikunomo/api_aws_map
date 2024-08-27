// src/App.jsx
import React, { useState } from 'react';
import Form from './components/Form';
import Map from './components/Map';



const App = () => {
    const [response, setResponse] = useState(null);

    const handleFormSubmit = async (formData) => {
        try {
            const res = await fetch('https://8y1qbrq9hj.execute-api.us-east-1.amazonaws.com/dev/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div >
            <h1>Coordenadas API</h1>
            <Form onSubmit={handleFormSubmit}  className="card"/>
            {response && (
                <div className='response'>
                    
                    <h2>Respuesta de la API:</h2>
                    <div className="response-api">
                      <pre>{JSON.stringify(response, null, 2)}</pre>
                      <h2>{response.message}</h2>
                    </div>
                    <Map className="response-map" lat={parseFloat(response.latitud)} lng={parseFloat(response.longitud)} />
                </div>
                
            )}
        </div>
    );
};

export default App;
