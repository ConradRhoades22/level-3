import React from 'react'

export default function pets(props){
    return(
        <div>
            <span className='petName'>{props.item.pets.name}</span>
            <span className='petType'>{props.item.pets.breed}</span>
        </div>
    )
}