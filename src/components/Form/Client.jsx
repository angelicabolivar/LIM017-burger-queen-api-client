  import React, {useState} from "react";
import { Cart } from "../Cart/Cart";
import { Products } from "../Products/Products";

  export const NameClient = ({}) =>{
    const [name, setName] = useState("");
 
    const handleChange =(e)=> {
      setName(e.target.value);
    }

   return (
    <div>
    <form >
      <label htmlFor="name">Cliente:</label>
      <input 
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={handleChange}
      />
  </form>

    <Cart name={name} />
    <Products />
  </div>
   )
  }
  