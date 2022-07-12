import { useEffect, useState } from 'react';
import { PedidosCart } from './PedidosCart';
import { getOrdersByStatus } from '../../services/orders';
import './style.css'

export const Pedidos = () =>{
  const [pedidos, setPedidos] = useState([])
  useEffect(()=>{
    getOrdersByStatus('delivering')
      .then(response => setPedidos(response.data))
      .catch(err => console.log(err))
  }, [])
  return(
    <div className= 'cookContainer'>
      <p className="cookTitle">Pedidos</p>
      <div className='cardContainer'>
        {pedidos && pedidos.map(order => {
          return (<PedidosCart order={order} key={order.id}></PedidosCart>)
        })}
      </div>
    </div>
  )
};