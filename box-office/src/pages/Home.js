import React,{useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {
    const[input,setInput]=useLastQuery();
    const[results,setResults]=useState(null);
    const[searchOption,setSearchOption]=useState('shows');
    const isShowsSearch=searchOption==='shows';
    const onInputChange=(ev)=>{
        setInput(ev.target.value)
         // eslint-disable-next-line
        console.log(ev.target.value)
    }
    const search=()=>{
        // https://api.tvmaze.com/search/shows?q=men

        apiGet(`/search/${searchOption}?q=${input}`)
        .then(result=>{
            setResults(result)
            // eslint-disable-next-line
            console.log(result)
           
        })
    }
        const onKeyDown=(ev)=>{
            if(ev.keyCode===13){
                // eslint-disable-next-line
                console.log("enter");
                search();
            }
        }

        const onRender=()=>{
            // eslint-disable-next-line
            console.log("hi")
            if(results && results.length===0) {
                return <div>No Result!!!!</div>
            }
            if(results && results.length>0) {
                return (results[0].show? <ShowGrid data={results}/> : <ActorGrid  data={results}/>)
            }
            

            return null;
        }
        const onRadioChange=(ev)=>{
            setSearchOption(ev.target.value)
        }
    
    return (
        <MainPageLayout>
              <input type="text" placeholder="Search for Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
              <button type="button" onClick={search}>Search</button>
              <div>
              <label htmlFor="shows-search">
                  Shows
                  <input type="radio" value="shows" onChange={onRadioChange} checked={isShowsSearch}/>
              </label>
              <label htmlFor="actor-search">
                Actors
                <input type="radio" value="people" onChange={onRadioChange} checked={!isShowsSearch} />
              </label>
              </div>
                {onRender()}
        </MainPageLayout>
    )
}

export default Home
