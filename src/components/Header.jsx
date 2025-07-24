import React from "react";
import '../blocks/Header.css'
import profileLogo from '../assets/profileLogo.png'
import { useEffect, useState } from "react";
import { fetchCurrentLoc } from '../util/constants';


const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

export default function Header({openAddClothesModal}){
const [currentLoc, setLoc] = React.useState(null);

useEffect(()=>{
    fetchCurrentLoc().then(setLoc);
})
    return <header className = 'header'>
        <div className='header__logo'>wtwr°</div>
        <div className='header__dateLoc'>{currentDate}, {currentLoc}</div>
        <div className='header__group'>
            <button id='addItemButton' className='header__button' onClick={openAddClothesModal}>+ Add Clothes</button>
            <div className='header__profile-name'>put Name here</div>
            <img className='header__profile-pic' src= {profileLogo} alt='Profile Logo Image'/>
        </div>
        </header>    
    
}