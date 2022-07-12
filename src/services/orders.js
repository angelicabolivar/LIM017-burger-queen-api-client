import axios from 'axios';
import {urlBase} from '../config'

const urlOrders = `${urlBase}/orders`

export const createOrder = (urlOrders, data)=>{
  return axios.post(urlOrders, data)
}

export const getOrders = () => {
  return axios.get(urlOrders)
}
export const getOrdersByStatus =(status) =>{
  const urlStatus = `${urlOrders}?status=${status}`
  return axios.get(urlStatus)
}

export const getOrder = (id) => {
  const urlOrder = `${url}/${id}`
  return axios.get(urlOrder)
}

export const putOrder =(id, data) =>{
  const urlOrder = `${url}/${id}`
  return axios.put(urlOrder, data)
}