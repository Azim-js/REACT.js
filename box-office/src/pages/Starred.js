import React,{useState,useEffect} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config'
import ShowGrid from '../components/show/ShowGrid';


const Starred = () => {

  const [starred]=useShows();
  const [shows,setShows]=useState(null);
  const [isLoading,setisLoading]=useState(true);
  const [error,setError]=useState(null);

   // eslint-disable-next-line
  useEffect(()=>{
    if(starred && starred.length>0){
      const promises=starred.map(showId=>apiGet(`/shows/${showId}`));

      Promise.all(promises)
      .then(apiData=>apiData.map(show=>({show})))
      .then(result=>{
        setShows(result);
        setisLoading(false);
      })
      .catch(err=>{
        setError(err.message);
        setisLoading(false);
      })
    }
    else{
      setisLoading(false);
    }
  })
      return (
        <MainPageLayout>
          {isLoading && <div> Shows are still loading </div>}
          {error && <div> Error Occured !{error} </div>}
          {!isLoading && !shows && <div> no shows were added !</div>}
          {!isLoading && !error && shows && < ShowGrid  data={shows} />}
        </MainPageLayout>
    )
}

export default Starred
