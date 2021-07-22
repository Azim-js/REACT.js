import React from 'react'
import Title from '../pages/Title'
import Navs from './Navs'

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title title="BOX-OFFICE APP" subtitle="Are you looking for this?" />
        <Navs />
         {children}   
        </div>
    )
}

export default MainPageLayout
