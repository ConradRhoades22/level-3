import React from "react"

export default function Card(props) {
    console.log(props.item)
return (
    <div className="card">
        <img src={props.item.imageUrl} alt="" />
        <div className="information">
            <div className="card--location">
                <span className="title">{props.item.location}</span>   
                <a href={props.item.googleMapsLocation}>This is Where it's at.</a>
            </div>
                <span className="date"> {props.item.startdate} - {props.item.enddate}</span>
            <p className="description">{props.item.description}</p>
        </div>
    </div>
)
}