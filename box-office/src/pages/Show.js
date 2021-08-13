import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom'
import {apiGet} from '../misc/config'


const Show = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    const {id}=useParams();
    const [show,setShow]=useState(null);
    // eslint-disable-next-line
    console.log("params",{id})
    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result=>{
            setTimeout(()=>{
                setShow(result);
            setIsLoading(false);
            },2000)
        }).catch(err=>{
            setError(err.message);
            setIsLoading(false);
        })
    },[id])
// eslint-disable-next-line
console.log("show",show)

    if(error){
        return(<div> Error Occured !!</div>)
    }
    if(isLoading){
        return(<div> Data is Being loaded !!</div>)
    }
    return (
        <div>
            This is Show Page
        </div>
    )
}

export default Show
