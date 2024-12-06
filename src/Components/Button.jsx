import React from 'react';
import './Button.css';

export default function Button({action, label, background_color}){
    return(
        <button type='button' style={{backgroundColor: background_color}}>{label}</button>
    );
}