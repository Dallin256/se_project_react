import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ModalWithForm from './ModalWithForm.jsx'
import ItemModal from './ItemModal.jsx'
import WeatherCard from './WeatherCard.jsx'
import ItemCard from './ItemCard.jsx'


export default function Main(){
return ( 
  <>
  <Header/>  
  <WeatherCard/>
  <ItemCard/>
  <ItemModal/><ModalWithForm/>  
  <Footer/>
  </>
);}