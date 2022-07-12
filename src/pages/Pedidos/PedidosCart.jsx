import './style.css';
import { Button } from '../../components/Button/Button';
import { useState } from "react";
import { putOrder } from '../../services/orders';

export const PedidosCart = ({order}) =>{

  const [orderStatus, setOrderStatus] = useState(order)
  const updateStatus = () =>{
    const data ={
      status: 'delivered'
    }
    putOrder(order.id, data)
      .then((res) =>{
        setOrderStatus({...orderStatus, status:'delivered'})
      })
  }

  return(
    <div className='pedidosContainer'>
      <div className='pedidos'>
        <p className='orderTitle'>#{order.id}</p>
        <div className={`State ${order.status}`}>{order.status}</div>
        <Button type="submit" className="btn btn-warning btn-sm" name="Entregada" onClick={updateStatus}></Button>
      </div>
    </div>
  )
}