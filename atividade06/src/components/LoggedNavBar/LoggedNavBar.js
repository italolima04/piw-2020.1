import './LoggedNavBar.css';
import Logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

import { ButtonNav } from '../ButtonNav/ButtonNav';
import { useContext } from 'react';
import { AuthContext } from '../../routes';


export default function LoggedNavBar(props) {
  const { setAuth } = useContext(AuthContext)
  return (
    <header className="header-nav">
      <div className="logo-title">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <span className="loged-user">{props.user}</span>
      </div>
      <nav className="nav">
        <ButtonNav linkToButton="/" className="button-nav" id="button-press" textButton="Timeline"> </ButtonNav>
        <ButtonNav linkToButton="/publish" className="button-nav" textButton="Publish"> </ButtonNav>
        <button onClick={() => { setAuth({ token: null, name: null }) }} className="button-logout" textButton="Logout">Logout</button>
      </nav>
    </header>
  )
}