import React, {useState} from "react";
import { useEffect } from "react";
import { helpHttp } from "../../Helpers/helpHttp";
import { CrudForm } from "../../components/ProductsTable/CrudForm/CrudForm";
import { CrudTable } from "../../components/ProductsTable/CrudTable/CrudTable";
import { Loader } from "../../components/Utils/Loader/Loader";
import { Message } from "../../components/Utils/Message";
// import {createProducts} from '../../services/products/createProducts'
import styleProducts from "./style.module.css";


export const Products = () => {
const [db, setDb] = useState(null);
const [dataToEdit, setDataToEdit] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

let api = helpHttp();
let url = "http://localhost:5000/products";



useEffect(()=>{
    setLoading(true);
    helpHttp()
    .get(url).then((res)=>{
        if(!res.err){
            setDb(res);
            setError(null);
        }else{
            setDb(null);
            setError(res);
        }

        setLoading(false);
    });
}, [url])

const createData = (data) => {
    data.id = Date.now();

    let options = {
        body:data,
        headers: {"content-type":"application/json"}
    };
    
    api.post(url,options).then((res)=>{
        console.log(res);
        if(!res.err){
            setDb([...db,res]);
        } else {
            setError(res);
        }
    })
};
const updateData = (data) => {
   let endpoint = `${url}/${data.id}`;
   let options = {
    body: data, 
    headers:{"content-type":"application/json"}
   };

   api.put(endpoint,options).then((res)=>{
    if(!res.err){
        let newData = db.map((el)=>(el.id===data.id?data:el));
        setDb(newData);
    } else {
        setError(res);
    }
})

};

const deleteData = (id) => {
    let isDelete =confirm(`¿Estás seguro de eliminar el usuario con el id ${id}`);

    if(isDelete){
     let endpoint = `${url}/${id}`;
     let options = {
        headers:{"content-type":"application/json"}
       };
       api.del(endpoint, options).then(res=>{
        if(!res.err){
         let newData = db.filter((el)=> el.id!==id);
         setDb(newData);
        } else {
            setError(res)
        }
       })

    }else {
        return;
    }
};

    return (
        <div>
            <h2>Productos</h2>
            <article  className={styleProducts.divFlex}>
            <CrudForm 
            className={styleProducts.fromStyle}
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}  
            setDataToEdit={setDataToEdit} 
            />
            {loading&&<Loader/>}
            {error&&<Message 
            msg={`Error ${error.status}: ${error.statusText}`} 
            bgColor="#dc3545"/>}
            {db&&<CrudTable 
            className={styleProducts.tableStyle}
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />}
            </article>
        </div>
    )
}