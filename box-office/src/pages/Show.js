import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom'
import {apiGet} from '../misc/config'


const Show = () => {
    const {id}=useParams();
    const [show,setShow]=useState(null);
    // eslint-disable-next-line
    console.log("params",{id})
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result=>{
            setShow(result);
        })
    },[id])
// eslint-disable-next-line
console.log("show",show)


    return (
        <div>
            This is Show Page
        </div>
    )
}

export default Show
