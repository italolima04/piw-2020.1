import './ButtonNav.css';

export function ButtonNav(props) {
  return (
    <div className="button-nav">
      <button> 
      <a href="/">
          {props.textButton}
      </a>
      </button>
    </div>
  )
}