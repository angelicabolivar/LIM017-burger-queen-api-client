import React from "react";

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
 const { id, email, password} = el;

    return (
        <div>
           <tr>
                <td>{email}</td>
                <td>{password}</td>
                {/* <td>{roles}</td> */}
                <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr> 
        </div>
    )
}