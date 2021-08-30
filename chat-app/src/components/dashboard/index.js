import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite'
import { useProfile } from '../../context/profile.context'
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';

const Dashboard= ({onSignOut}) => {
    const {profile}=useProfile();
    const onSave= async (newData)=>{
        // eslint-disable-next-line
        console.log(newData)

        const userNickname=database.ref(`/profiles/${profile.uid}`).child('name');
        try{
            await userNickname.set(newData);
            Alert.success('NickName has been set',4000);
        }catch(err){
            Alert.error(err.message,4000)
        }
    }
    return <>
    <Drawer.Header>
        <Drawer.Title>
        Dashboard
        </Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
    <h3>Hey,{profile.name}</h3>
    <ProviderBlock />
    <Divider />
    <EditableInput
        name="nickname"
        initialValue={profile.name}
        onSave={onSave}
        label={<h6 className="mb-2">NickName</h6>}
        />
        <AvatarUploadBtn />
    </Drawer.Body>
    <Drawer.Footer>
    <Button block color="red" onClick={onSignOut}>
        SignOut
    </Button>
    </Drawer.Footer>
    </>
}

export default Dashboard
