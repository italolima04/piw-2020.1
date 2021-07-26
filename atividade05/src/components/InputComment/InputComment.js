import './InputComment.css';

export default function InputComment(props) {
  return (
    <>
      <textarea className="input-comment" placeholder={props.placeholder} />
    </>
  )

}