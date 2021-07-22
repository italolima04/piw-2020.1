import './ButtonNav.css';

import { Link } from 'react-router-dom';

export function ButtonNav(props) {
  return (
    <div className="button-nav">
      <button>
        <Link to={props.linkToButton}>
          {props.textButton}
        </Link>
      </button>
    </div>
  )
}