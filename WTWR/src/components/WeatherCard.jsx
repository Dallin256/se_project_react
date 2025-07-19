import '../blocks/weatherCard.css'
import Api from "../util/API.js";
import {apiKey, defaultCoord} from '../util/constants'

export default function WeatherCard(){
    const api = new Api(apiKey, defaultCoord);

    api.getInfo().then((fahrenheit) => {
    const currentTemp = fahrenheit;
    console.log(currentTemp);
    });
    return <div className="weatherCard"><div>{currentTemp}</div></div>
}