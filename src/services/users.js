import axios from 'axios';

export const getUsers = () =>{
  return axios.get(urlUsers)
}

export const getUser = (email) => {
  const urlUser = `${urlUsers}/${email}`
  return axios.get(urlUser)
}
