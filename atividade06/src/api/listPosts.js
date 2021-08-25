import axios from "axios"

export default function ListPosts(token) {
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/api/posts',
    headers: {
      token
    }
  })
}


