import axios from 'axios';
// import {urlBaseAuth} from '../config'

// const urlLogin = `${urlBaseAuth}/login`
let url = 'http://localhost:5000/users';
export const login = (email, password) => {
  const data = {
    email: email,
    password: password
  }
  return axios.get(url, data)
}