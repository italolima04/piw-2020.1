import axios from "axios"

export default function CreatePost(data, token) {
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/api/posts',
    data,
    headers: {
      token: token,
    }
  })
}


