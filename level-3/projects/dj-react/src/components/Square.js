import React from "react"

export default function Square(props) {
        const styles = {
        backgroundColor: props.color
    }
    return(
        <div className="Square" style={styles}></div>
    )
}
