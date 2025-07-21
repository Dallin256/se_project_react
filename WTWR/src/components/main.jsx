import ModalWithForm from './ModalWithForm.jsx'
import ItemModal from './ItemModal.jsx'
import WeatherCard from './WeatherCard.jsx'
import ItemCard from './ItemCard.jsx'
import { currentTemp } from '../util/constants.js'
import '../blocks/Main.css'


export default function Main(){
return ( 
  
  <div className='main'>
  <WeatherCard/>
  <div className='main main__announce'>Today is {currentTemp}°F / You may want to wear:</div>
  <ItemCard/>
  <ItemModal/>
  <ModalWithForm/>
  </div> 
  
);}