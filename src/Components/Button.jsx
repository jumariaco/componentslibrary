import React from 'react';
import './Button.css';

export default function Button({onClick, label, background_color}){
    return(
        <button type='button' style={{backgroundColor: background_color}} onClick={onClick}>{label}</button>
    );
}