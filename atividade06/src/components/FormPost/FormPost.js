import "./FormPost.css";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CreatePost from "../../api/createPost";
import { AuthContext } from "../../routes";

export default function FormComment() {
  const { auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    console.log(auth);
    const post = {
      user_id: auth.user_id,
      content: data.content,
      likes: 0,
    }

    CreatePost(post, auth.token).then((response) => {
      console.log(response);
      history.push('/');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="comment-page">
      <div className="card-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea className="form-textarea" rows="10" placeholder="Type your post here" cols="50" minLength="1" spellCheck="true" name="content" {...register("content")}>
          </textarea>
          <div className="form-button">
            <button type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  )
}