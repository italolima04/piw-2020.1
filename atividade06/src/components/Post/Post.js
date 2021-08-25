import './Post.css';

import { Link, useHistory } from 'react-router-dom'

import Comment from '../Comment/Comment';
import InputComment from '../InputComment/InputComment';

import ThumbUp from '../../assets/thumb-up.png'
import CreateComment from '../../api/createComment';
import { useContext } from 'react';
import { AuthContext } from '../../routes';
import { useForm } from 'react-hook-form';
import FormComment from '../FormComment/FormComment';
import Comments from '../Comments/Comments';
import { useState } from 'react';
import { useEffect } from 'react';
import ListComments from '../../api/listComments';


export default function Post({ user, content, numberOfLikes }) {
  const { auth } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    ListComments(auth.token).then((response) => {
      setComments(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <div className="card">
        <h5 className="card-title">@{user}</h5>
        <p className="card-text">{content}</p>
        <div className="card-likes">
          <h6 className="card-subtitle">{numberOfLikes} Likes</h6>
          <div className="button-card">
            <button className="like-button">
              <img src={ThumbUp} alt="Like" />
            </button>
          </div>
        </div>
      </div>
      <div className="content-comment-submit">
        <div className="line-vertical"></div>
        <Comments comments={comments}> </Comments>
      </div>

      <div className="content-comment">
        <FormComment> </FormComment>
      </div>
    </>
  )
}

