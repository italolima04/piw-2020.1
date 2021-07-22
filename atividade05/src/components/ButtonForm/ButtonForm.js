import './ButtonForm.css';

import { Link } from 'react-router-dom';

export default function ButtonForm(props) {
  return (
    <div>
      <button className="button-form">
        <Link to="/">
          {props.textButton}
        </Link>
      </button>
    </div>
  )
}