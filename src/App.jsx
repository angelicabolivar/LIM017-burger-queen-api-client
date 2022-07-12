import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Onboarding } from './pages/Onboarding/Onboarding';
import { Orders } from './pages/Orders/Orders';
import { Order } from './pages/Order/Order';
import { Users } from './pages/Users/Users'
import { Products } from './pages/Products/Products';
import { Pedidos } from './pages/Pedidos/Pedidos';




function App() {
 return (
  <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/order/:id' element={<Order/>}/>
      <Route path='/pedidos' element={<Pedidos/>}/>  
      <Route path='/users' element={<Users />}/>
      <Route path='/products' element={<Products/>}/>

    </Routes>
  </BrowserRouter>
 )
}

export default App
