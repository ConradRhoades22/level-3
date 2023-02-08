import React from 'react'
import data from '../../../friends-with-pets/src/data'

export default function friendsList(){
    const friendsList = data.map(item => {
        return(
            <Friends-list 
            {...item}
            key={item}
            item={item}
            />
        )})
    return(
        <div>
            <span>{friendsList}</span>
        </div>
    )
    
}