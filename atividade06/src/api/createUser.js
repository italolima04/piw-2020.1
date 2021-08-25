import axios from "axios"

export default function CreateUser(data) {
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/api/users',
    data
  })
}


