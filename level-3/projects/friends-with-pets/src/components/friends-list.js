import React from 'react'
import data from '../data'
import Friends from './Friends'

export default function FriendsList(){
    const list = data.map(item => {
        return(
            <Friends 
            {...item}
            key={item.id}
            item={item}
            />
        )})
    return(
        <div className='list'>
            {list}
        </div>
    )
    
}