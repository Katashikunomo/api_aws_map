import React from 'react';

const ResponseDisplay = ({ response }) => {
    const respuesta = JSON.stringify(response, null, 2);
    return (
        <div>
            <h2>API Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre> 

        </div>
    );
};

export default ResponseDisplay;
