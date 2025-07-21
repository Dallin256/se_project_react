import '../blocks/weatherCard.css'
import {currentTemp} from '../util/constants'
import cloud from '../assets/cloud.png'


export default function WeatherCard(){
   
    return <div className="weatherCard">
        
        
        <div className="weatherCard__temp">{currentTemp}°F</div>
        <div className="weatherCard__sun"></div>
        <img className="weatherCard__cloud" src={cloud}></img>
        
        </div>
}