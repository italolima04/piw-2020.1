import './NavBar.css';
import Logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

import { ButtonNav } from '../ButtonNav/ButtonNav';


export default function NavBar(props) {
  return (
    <header className="header-nav">
      <div className="logo-title">
        <ButtonNav linkToButton="/publish" className="button-nav" textButton="Register"> </ButtonNav>
        <ButtonNav linkToButton="/publish" className="button-nav" textButton="Login"> </ButtonNav>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <nav className="nav">
          <ButtonNav linkToButton="/" className="button-nav" id="button-press" textButton="Timeline"> </ButtonNav>
          <ButtonNav linkToButton="/publish" className="button-nav" textButton="Publish"> </ButtonNav>
          <span className="loged-user">{props.user}</span>
        </nav>
      </div>
    </header>
  )
}