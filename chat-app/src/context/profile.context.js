import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, database } from '../misc/firebase';

const ProfileContext=createContext();

export const ProfileProvider=({children})=>{
    const [profile,setProfile]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        let userRef;
        const authUnsub=auth.onAuthStateChanged(authObj=>{
            
            // eslint-disable-next-line 
            console.log(authObj)

            
            if(authObj){
                userRef=database.ref(`/profiles/${authObj.uid}`)
                // real time subscription 
                userRef.on('value',(snap)=>{
                // eslint-disable-next-line 
                console.log(snap.val())
                const {name,createdAt, avatar }=snap.val()

                const data={
                    name,
                    createdAt,
                    avatar,
                    uid:authObj.uid,
                    email:authObj.email
                }
                setProfile(data);
                setIsLoading(false);

            })

                
            }
            else{
                if(userRef){
                    userRef.off();
                }
                   setProfile(null) ;
                   setIsLoading(false);
            }

        })
        return()=>{
            authUnsub();
            if(userRef){
                userRef.off();
            }
        }
    },[])

    return <ProfileContext.Provider value={{isLoading,profile}}>{children}</ProfileContext.Provider>
}

export const useProfile=()=>useContext(ProfileContext)