import React from "react"

export default function Badge(props) {
    return(
        <div className="badge">
            <h3>First Name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Birth Place: {props.birthPlace}</h3>
            <h3>Phone number: {props.phoneNumber}</h3>
            <h3>Favorite Foods: {props.favFoods}</h3>
            <h3>Comments: {props.comments}</h3>
        </div>
    )
}