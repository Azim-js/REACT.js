/* eslint-disable no-underscore-dangle */
import React,{useEffect , useReducer} from 'react';
import { useParams } from 'react-router-dom'
import ShowMainData from '../components/show/ShowMainData'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
import {apiGet} from '../misc/config'
import Cast from '../components/show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';


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
        <ShowPageWrapper>
            <ShowMainData image={show.image} name={show.name} rating={show.rating} tags={show.genres} summary={show.summary}/>
            <InfoBlock>
                <h2>Details</h2>
                <Details status={show.status} network={show.network} premiered={show.premiered} />
            </ InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons} />
            </InfoBlock>
            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show
