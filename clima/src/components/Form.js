import React, { useState } from 'react';

const Form = () => {
    const [city, setCity] = useState ("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
    }

    return (
        <div className='container'>
            <form onSubmit={onsubmit}>
                <div className='input-group mb-3 mx-auto'>
                    <input type='text' className='form-control' placeholder=' ingrese la ciudad' onChange={(e) =>setCity(e.target.value)} />
                    <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>                    
                </div>
            </form>


        </div>
    );
}

export default Form;
