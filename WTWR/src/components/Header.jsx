import '../blocks/Header.css'
import profileLogo from '../assets/profileLogo.png'

export default function Header(){
    return <header className = 'header'>
        <div className='header__logo'>wtwr°</div>
        <div className='header__dateLoc'>Month XX Location</div>
        <div className='header__group'>
            <button className='header__button'>+ Add Clothes</button>
            <div className='header__profile-name'>put Name here</div>
            <img className='header__profile-pic' src= {profileLogo} alt='Profile Logo Image'/>
        </div>
        </header>
}