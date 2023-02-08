import React from 'react'
import Blogpost from './blogpost'
import data from '../data'

export default function Bloglist(props) {
    const post = data.map(item => {
        return(
        <Blogpost
        {...item}
        key={item.id}
        item={item}
        />
    )})
    return (
        <div>
            <span>{post}</span>
            <span>{Blogpost}</span>
            <span>{Blogpost}</span>
        </div>
    )
}