import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'

const Home = () => {
    const[input,setInput]=useState('');
    const[results,setResults]=useState(null);
    const onInputChange=(ev)=>{
        setInput(ev.target.value)
         // eslint-disable-next-line
        console.log(ev.target.value)
    }
    const search=()=>{
        // https://api.tvmaze.com/search/shows?q=men

        apiGet(`/search/shows?q=${input}`)
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
                return <div>{results.map((item)=><div key={item.show.id}>
                    {item.show.name}
                </div>)}</div>
            }

            return null;
        }
    
    return (
        <MainPageLayout>
              <input type="text" plceholder="Search for Something" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
              <button type="button" onClick={search}>Search</button>
                {onRender()}
        </MainPageLayout>
    )
}

export default Home
