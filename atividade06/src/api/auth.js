import axios from "axios"

export default function Login(data) {
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/api/users/signin',
    data
  })
}


