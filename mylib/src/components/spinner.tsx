 import React from "react";
 import axios from 'axios';

 interface ISpinner {
     name:string
 }
 export const Spinner = ({name}:ISpinner)=>{

    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(resp=>{
            console.log(resp.data);
        })
        
    },[]);

 
    return (
        <div>
            Spinner data {name}
        </div>
    )
}
