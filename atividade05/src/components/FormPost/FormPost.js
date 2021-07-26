import ButtonForm from "../ButtonForm/ButtonForm";
import "./FormPost.css";

export default function FormPost() {
  return (
    <div className="comment-page">
      <div className="card-form">
        <form>
          <textarea className="form-textarea" rows="10" placeholder="Type your post here" cols="50" minlength="1" spellcheck="true">
          </textarea>
          <div className="form-button">
            <ButtonForm linkButton="/" textButton="Share"> </ButtonForm>
          </div>
        </form>
      </div>
    </div>
  )
}