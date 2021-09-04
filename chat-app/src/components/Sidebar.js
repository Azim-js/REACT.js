import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'


const Sidebar = () => {

    const topSidebarRef=useRef();
    const [height,setHeight]=useState(0);
    
    useEffect(()=>{
        if(topSidebarRef.cuurent){
            // accessing the elem from dom 

            setHeight(topSidebarRef.current.scrollHeight)
        }
    },[topSidebarRef])

    return (
        <div className="h-100 pt-2">
            <div ref={topSidebarRef}>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider> Join Conversation</Divider>
            </div>
            <ChatRoomList aboveElHeight={height} />
        </div>
    )
}

export default Sidebar
