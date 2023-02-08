import React from 'react'
import Pets from './pets'

export default function Friends(props) {
    const pets = props.pets.map(item => {
        return (
            <Pets 
            {...item}
            />
        )
    })
    return (
        <div className='friends'>
            <div className='friend'>
                <div className='person'>
                    <h3 className='name'>{props.item.name}</h3>
                    <span className='age'><h4>{props.item.age}</h4></span>
                </div>
                <span className='fPets'><strong>Pets: </strong>{pets}</span>
            </div>
        </div>
    )
}