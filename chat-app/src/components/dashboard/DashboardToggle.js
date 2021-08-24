import React, { useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import Dashboard from '.'
import { useModalState,useMediaQuery } from '../../misc/custom-hooks'
import { auth } from '../../misc/firebase'

const DashboardToggle = () => {
    const {isOpen,close,open}=useModalState();
    const isMobile=useMediaQuery(('(max-Width:992px)'));

    const onSIgnOut=useCallback(()=>{
        auth.signOut();
        Alert.info('Signed out',4000);
        close();
    },[close])
    return (
       <>
       <Button block color ="blue" onClick={open}>
           <Icon icon="dashboard"/>Dashboard
       </Button>
       <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSIgnOut} />
       </Drawer>
       </>
    )
}

export default DashboardToggle
