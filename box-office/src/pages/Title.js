import React,{memo} from 'react'
import { TitleWrapper } from '../components/Title.styled'


const Title = ({title,subtitle}) => {
    // eslint-disable-next-line
    console.log("render")
    return (
        <TitleWrapper>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    )
}

export default  memo(Title)
