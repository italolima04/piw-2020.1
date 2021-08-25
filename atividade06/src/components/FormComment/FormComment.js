
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../routes";
import CreateComment from "../../api/createComment";

export default function FormComment() {
  const { auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log('Data: ');
    console.log(data);

    const comment = {
      user_id: auth.user_id,
      text: data.comment,
      post_id: "612505c766ab1bf95bd80219",
    }

    CreateComment(comment, auth.token).then((response) => {
      console.log('Response: ');
      console.log(response);
      history.push('/');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="content-comment-submit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea className="input-comment" placeholder="Add comment here" name="comment" {...register("comment")} />
        <button className="submit-link">
          Add Comment
        </button>
      </form>
    </div>
  )
}