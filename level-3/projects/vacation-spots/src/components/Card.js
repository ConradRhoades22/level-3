import React from 'react'
export default function card(props) {

    return (
        <div className='card'>
            <span className='place'>Location: {props.item.place}</span>
            <span className='time'>Best time of the year: {props.item.timeToGo}</span>
            <span className='price'>Price: ${props.item.price}</span>
        </div>
    )
}