import './ButtonNav.css';

import { NavLink } from 'react-router-dom';

export function ButtonNav(props) {
  return (
    <div className="button-nav">
      <button>
        <NavLink exact to={props.linkToButton}>
          {props.textButton}
        </NavLink>
      </button>
    </div>
  )
}