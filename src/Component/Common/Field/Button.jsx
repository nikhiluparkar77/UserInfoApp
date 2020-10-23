import React from 'react';

const Button = ( { type, value, onclick } ) => {
    return (
        <div className="Bton">
            <button type={ type } onClick={ onclick } className="btn btn-outline-dark">{ value }</button>
        </div>
    );
};

export default Button;
