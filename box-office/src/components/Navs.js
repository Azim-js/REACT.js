import React,{memo} from 'react'
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navs.styled';


const Navs = () => {
    const location=useLocation();
    // eslint-disable-next-line
    console.log("location",location)
    const Links=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}];
    return (
        <div>
            <NavList>
                {
                    Links.map(item=><li key={item.to}> <LinkStyled to={item.to} className ={item.to === location.pathname ? 'active':''}> {item.text} </LinkStyled></li>)
                }
            </NavList>
        </div>
    )
}

export default memo(Navs)
