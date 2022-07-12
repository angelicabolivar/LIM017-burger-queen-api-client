import axios from 'axios';

const urlProducts = "http://localhost:5000/products";

export const createProduct = (data)=>{
  return axios.post(urlProducts, data)
}

export const getProducts = () => {
  return axios.get(urlProducts)
}

export const getProduct = (id) => {
  const urlProduct = `${urlProducts}/${id}`
  return axios.get(urlProduct)
}