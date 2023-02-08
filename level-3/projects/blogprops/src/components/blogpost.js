import React from 'react'

export default function Blogpost(props) {
    return (
        <div className='blogpost'>
            <span className='title'><a href='#'>{props.item.title}</a></span>
            <span className='sub-title'>{props.item.subTitle}</span>
            <span className='author'>Posted by <a href='#'>{props.item.author}</a> on {props.item.date}</span>
        </div>
    )
}