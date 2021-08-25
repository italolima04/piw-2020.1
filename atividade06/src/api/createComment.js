import axios from "axios"

export default function CreateComment(data, token) {
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/api/comments',
    data,
    headers: {
      token
    }
  })
}


