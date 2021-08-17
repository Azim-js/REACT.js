/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom'
import ShowMainData from '../components/show/ShowMainData'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
// import {apiGet} from '../misc/config'
import Cast from '../components/show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';
import { useShow } from '../misc/custom-hooks';


const Show = () => {
    const {id}=useParams();

    const { show,isLoading,error}=useShow(id);

   
    
      // const [state,dispatch]=useReducer(reducer,initialSate)
    
    // const [isLoading,setIsLoading]=useState(true);
    // const [error,setError]=useState(null);

    
    // const [show,setShow]=useState(null);
    // eslint-disable-next-line
    console.log("params",{id})
    
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
