import React,{useEffect , useReducer} from 'react';
import { useParams } from 'react-router-dom'
import {apiGet} from '../misc/config'


const Show = () => {
    const {id}=useParams();

    const reducer=(prevState,action)=>{
        switch(action.type){
            case 'FETCH_SUCESS':{
                return {isLoading:false,show:action.show,error:null}
            }
            case 'FETCH_FAILED':{
                return{...prevState,isLoading:false,error:action.error}
            }
            default: return prevState
        }
    }

    const initialSate={
        show:null,
        isLoading:true,
        error:null
    }
    const [{show,isLoading,error},dispatch]=useReducer(reducer,initialSate)
    // const [state,dispatch]=useReducer(reducer,initialSate)
    
    // const [isLoading,setIsLoading]=useState(true);
    // const [error,setError]=useState(null);

    
    // const [show,setShow]=useState(null);
    // eslint-disable-next-line
    console.log("params",{id})
    useEffect(()=>{
        let isMounted=true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result=>{
            setTimeout(()=>{
                if(isMounted){
                    // setShow(result);
                    // setIsLoading(false);
                    dispatch({type:'FETCH_SUCESS',show:result})
                }
               
            },2000)
        }).catch(err=>{
            if(isMounted){
                // setError(err.message);
                // setIsLoading(false);
                dispatch({type:'FETCH_FALSE',error:err.message})
            }
            
        })
        return ()=>{
            isMounted=false;
        }
    },[id])
// eslint-disable-next-line
console.log('SHOW',show)
// console.log("state",state)

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
