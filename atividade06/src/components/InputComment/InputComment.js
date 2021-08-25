import './InputComment.css';

export default function InputComment(props) {
  return (
    <>
      <form>
        <textarea className="input-comment" placeholder={props.placeholder} />
      </form>
    </>
  )

}