import React from 'react'
import IMAGE_NOT_FOUND from '../../images/inotfound.JPG'
import ShowCard from './ShowCard'

const ShowGrid = ({data}) => {
    return (
        <div>{
             
             data.map(({show})=>{
                return(<ShowCard key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium : IMAGE_NOT_FOUND} summary={show.summary} /> 
             )})
             }
        </div>
    )
}

export default ShowGrid
