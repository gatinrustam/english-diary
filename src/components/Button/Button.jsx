import React from 'react';
import './Button.css';

export default function Button({ title }) {
    return (
        <div className="button button--green">
            {title}
        </div>
    )
}