import React from 'react'

export default function Inputs(props) {

    function eChange(event) {
        props.setformInput(prevFormInput => {
            return {
                ...prevFormInput,
                [event.target.name]: event.target.value
            }
        })
    }
    return(
        <form className='inputs' onSubmit={props.formSubmit}>
            <input onChange={eChange} type="text" placeholder="First Name" name='firstName' value={props.formInput.firstName} required></input>
            <input onChange={eChange} type="text" placeholder="Last Name" name='lastName' value={props.formInput.lastName} required></input>
            <input onChange={eChange} type="email" placeholder="Email: someone@email.com" name='email' value={props.formInput.email} required></input>
            <input onChange={eChange} type="text" placeholder="Birth Place" name='birthPlace' value={props.formInput.birthPlace} required></input>
            <input onChange={eChange} type="number" placeholder="Phone Number" name='phoneNumber' value={props.formInput.phoneNumber} required></input>
            <input onChange={eChange} type="text" placeholder="Favorite Food" name='favFoods' value={props.formInput.favFoods} required></input>
            <textarea onChange={eChange} placeholder="Comments" name='comments' value={props.formInput.comments}></textarea>
            <input  type="submit" value="Submit"/>
        </form>
    )
}