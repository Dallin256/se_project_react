import ModalWithForm from './ModalWithForm.jsx'
import ItemModal from './ItemModal.jsx'
import WeatherCard from './WeatherCard.jsx'
import ItemCard from './ItemCard.jsx'
import React from "react";
import { useEffect, useState } from "react";
import '../blocks/ItemCard.css'
import { fetchCurrentTemp, fetchCurrentFeel, initialCards } from '../utils/constants.js'
import '../blocks/Main.css'


export default function Main(){
   const [currentTemp, setcurrentTemp] = React.useState(null);
   const [currentFeel, setcurrentFeel] = React.useState(null);

useEffect(()=>{
    fetchCurrentTemp().then(setcurrentTemp);
    fetchCurrentFeel().then(setcurrentFeel);
})

const filteredCards = initialCards.filter(item => item.tempType === currentFeel);
  
return ( 
  <div className='main'>
  <WeatherCard/>
  <div className='main main__announce'>Today is {currentTemp}°F / You may want to wear:</div>
  <div className="ItemCard__all">
   {filteredCards.map(item =>(
    <ItemCard key={item.id} item = {item}></ItemCard>
  ))}
  </div>  
  </div> 
  
);}