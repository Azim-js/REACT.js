import {useReducer,useEffect,useState} from 'react';
import { apiGet } from './config';

function showReducer(prevState,action){
    // eslint-disable-next-line
    console.log(prevState,action)
    switch(action.type){
        case 'ADD': {
            return [...prevState,action.showId]
        }
        case 'REMOVE':{
            return prevState.filter((showId)=>showId!==action.showId)
        }
        default : return prevState;
    }
}

function usePersistedReducer(reduce,initalState,key) {
    const [state,dispatch]=useReducer(reduce,initalState,(initial)=>{
        // eslint-disable-next-line
        console.log(key)
        const persisted=localStorage.getItem(key)
        return (persisted ? JSON.parse(persisted):initial)
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state));
    },[state,key]);
    return [state,dispatch];
}

export function useShows(key="shows") {
    return usePersistedReducer(showReducer,[],key);
}

export function useLastQuery(key="last Query"){
    const [input,setInput]=useState( ()=>{
        const persisted= sessionStorage.getItem(key);
        return persisted ? JSON.parse(persisted):"";
    })
    const setPersistedInput=(newState)=>{
        setInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState))
    }
    return [input,setPersistedInput];
}

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



export function useShow(showId){
    const [state,dispatch]=useReducer(reducer,{
        show:null,
        isLoading:true,
        error:null
    });
    useEffect(()=>{
        let isMounted=true;
        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(result=>{
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
    },[showId])
    return state;
}