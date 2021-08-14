import {useReducer,useEffect} from 'react';

function showReducer(prevState,action){
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