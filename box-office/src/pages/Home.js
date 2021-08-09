import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
    const[input,setInput]=useState('');
    const onInputChange=(ev)=>{
        setInput(ev.target.value)
         // eslint-disable-next-line
        console.log(ev.target.value)
    }
    const search=()=>{
        // https://api.tvmaze.com/search/shows?q=men

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(r=>r.json())
        .then(result=>{
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
    
    return (
        <MainPageLayout>
              <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
              <button type="button" onClick={search}>Search</button>
            
        </MainPageLayout>
    )
}

export default Home
