import './NavBar.css';
import Logo from '../../assets/logo.png';

import {ButtonNav} from '../ButtonNav/ButtonNav';

export default function NavBar(props) {
  return (
      <header className="header-nav">
      <div className="logo-title"> 
        <img className="logo" src={Logo} alt="Logo"/>
        <h3 className="title"> Social Network </h3> 
      </div>
      <nav className="nav"> 
        <ButtonNav className="button-nav" id="button-press" textButton="Timeline"> </ButtonNav>
        <ButtonNav className="button-nav" textButton="Publish"> </ButtonNav>
        <span className="loged-user">{props.user}</span>
      </nav>
      </header>
  )
}