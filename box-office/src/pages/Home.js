import React,{useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

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
              <SearchInput type="text" placeholder="Search for Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
              
              <RadioInputsWrapper>
                  <div>
                  <CustomRadio label="Shows" id="shows-search" value="shows" onChange={onRadioChange} checked={isShowsSearch}/>
                  </div>
              <div>
                <CustomRadio label="Actors" id="actor-search" value="people" onChange={onRadioChange} checked={!isShowsSearch}/>
              </div>
              
              </RadioInputsWrapper>
              < SearchButtonWrapper>
              <button type="button" onClick={search}>Search</button>
              </SearchButtonWrapper>
                {onRender()}
        </MainPageLayout>
    )
}

export default Home
