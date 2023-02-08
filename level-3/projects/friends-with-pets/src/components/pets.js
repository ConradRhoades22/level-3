import React from 'react' 

export default function Pets(props){
    return(
        <div className='pets'>
            <span className='petName'><strong>Name: </strong>{props.name}</span>
            <span className='petType'><strong>Breed: </strong>{props.breed}</span>
        </div>
    )
}