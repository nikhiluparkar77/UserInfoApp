import React from 'react';

const TextBox = ( { type, label, value, name, onChange } ) => {
    return (
        <div className="form-group">
            <label className="label">{ label }</label>
            <input type={ type } value={ value } name={ name } onChange={ onChange } className="form-control" />

        </div>
    );
};

export default TextBox;
