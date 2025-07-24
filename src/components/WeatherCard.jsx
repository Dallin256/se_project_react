import '../blocks/weatherCard.css'
import React from "react";
import { useEffect, useState } from "react";
import {fetchCurrentTemp, fetchCurrentFeel} from '../util/constants'
import cloud from '../assets/cloud.png'


export default function WeatherCard(){
   const [currentTemp, setcurrentTemp] = React.useState(null);
   const [currentFeel, setcurrentFeel] = React.useState(null);

useEffect(()=>{
    fetchCurrentTemp().then(setcurrentTemp);
    fetchCurrentFeel().then(setcurrentFeel);
})
    return <div className="weatherCard">
        
        
        <div className="weatherCard__temp">{currentTemp}°F</div>
        <div className="weatherCard__sun"></div>
        <img className="weatherCard__cloud" src={cloud}></img>
        
        </div>
}