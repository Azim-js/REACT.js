import {useReducer,useEffect,useState, useRef,useCallback} from 'react';
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
    const setPersistedInput=useCallback((newState)=>{
        setInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState))
    },[key])
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
               
            },1000)
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

export function useWhyDidYouUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef();
    useEffect(() => {
      if (previousProps.current) {
        // Get all keys from previous and current props
        const allKeys = Object.keys({ ...previousProps.current, ...props });
        // Use this object to keep track of changed props
        const changesObj = {};
        // Iterate through keys
        allKeys.forEach((key) => {
          // If previous is different from current
          if (previousProps.current[key] !== props[key]) {
            // Add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        });
        // If changesObj not empty then output to console
        if (Object.keys(changesObj).length) {
            // eslint-disable-next-line 
          console.log("[why-did-you-update]", name, changesObj);
        }
      }
      // Finally update previousProps with current props for next hook call
      previousProps.current = props;
    });
  }