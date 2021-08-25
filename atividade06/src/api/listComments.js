import axios from "axios"

export default function ListComments(token) {
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/api/comments',
    headers: {
      token
    }
  })
}


