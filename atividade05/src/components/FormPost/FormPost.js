import ButtonForm from "../ButtonForm/ButtonForm";
import "./FormPost.css";

export default function FormPost() {
  return (
    <div className="comment-page">
      <div className="card-form">
        <form>
          <textarea className="form-textarea" rows="10" placeholder="Type a comment for post" cols="50" minlength="1" spellcheck="true">
          </textarea>
          <ButtonForm to="/" textButton="Comment" className="form-button"> </ButtonForm>
        </form>
      </div>
    </div>
  )
}