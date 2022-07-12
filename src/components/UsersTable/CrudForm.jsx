import React, {useState, useEffect} from 'react';

const initailForm = {
    id: null,
    email:"",
    password:"",
    // roles: false
    
};

export const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
const [form, setForm] =useState(initailForm)

   useEffect(()=> {
    if(dataToEdit){
        setForm(dataToEdit);
    } else {
        setForm(initailForm);
    }
   }, [dataToEdit]);

    const handleChange = (e) => {
     setForm({
       ...form,
       [e.target.name]: e.target.value,
    });
    };

    // const handleChangeAdmin = (e) => {
    //     debugger
    //     setForm({
    //       ...form,
    //       roles: e.target.value
    //    });
    //    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(!form.email){
            alert("Datos incompletos");
            return;
        }

        if(form.id===null){
            createData(form);
        } else {
            updateData(form);
            
        }

        handleReset();

    }

    const handleReset = (e) => {
        setForm(initailForm);
        setDataToEdit(null);
    }

return (
    <div>
        <h3>{dataToEdit? "Editar":"Agregar"} </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" onChange={handleChange}  value={form.email} />
            <input type="text" name="password" placeholder="Contraseña" onChange={handleChange}  value={form.password} />
            {/* <label> ¿Es admin?</label>
            <input type="checkbox"   name="roles" placeholder="¿Admin?" onChange={handleChange}  value={form.roles} /> */}
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
    </div>
)
}