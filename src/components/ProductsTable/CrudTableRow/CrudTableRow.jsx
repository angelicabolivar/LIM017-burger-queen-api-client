import React from "react";
import { Button } from "../../Button/Button";

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
 const { id, dateEntry, name, price, image, type} = el;

    return (
        <div>
           <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{type}</td>
                <td>{image}</td>
                <td>
                <Button type="submit" onClick={()=> setDataToEdit(el)} className="btn btn-warning btn-sm" name="Editar" ></Button>
                <Button type="submit" onClick={()=> deleteData(id)} className="btn btn-warning btn-sm" name="Eliminar" ></Button>
                </td>
            </tr> 
        </div>
    )
}