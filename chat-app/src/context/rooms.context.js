/* eslint-disable no-console */
import React,{createContext, useContext, useEffect, useState} from 'react'
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext=createContext();

export const RoomsProvider = ({children}) => {

    const [rooms,setRooms]=useState(null);

    useEffect(()=>{
        const roomListRef=database.ref('rooms');

        roomListRef.on('value',(snap)=>{
            console.log('snap.val()',snap.val())
            const data =transformToArrWithId(snap.val());
            console.log('data',data);
            setRooms(data);
        });
        return () =>{
            roomListRef.off();
        }
    },[])
    return (
        <RoomsContext.Provider value={rooms}>
            {children}
        </RoomsContext.Provider>
    )
}

export const useRooms= ()=>useContext(RoomsContext);