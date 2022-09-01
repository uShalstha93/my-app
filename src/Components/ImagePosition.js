import React, { useState } from "react";

const ImagePosition = () => {
    const [positionX, setPositionX] = useState('0px')
    const [positionY, setPositionY] = useState('0px')
    const [clockWise, setClockWise] = useState('rotate(0deg)')
    const [reset, setReset] = useState('')

    return (
        <div className="container">
            <div>
                <button className="btn btn-outline-primary" alt="UP" 
                onClick={() => {
                    setPositionX('0px')
                    setPositionY('-200px')
                }}>
                    <img alt="up" src="https://icons-for-free.com/iconfiles/png/512/arrow+top+arrow+up+arrow+upward+top+up+upward+icon-1320185743440304413.png" height="20px" width="30px" />
                </button>
                <button className="btn btn-outline-primary" alt="DOWN" 
                onClick={() => {
                    setPositionX('0px')
                    setPositionY('150px')
                }}>
                    <img alt="down" src="https://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png" height="20px" width="30px" />
                </button>
                <button className="btn btn-outline-primary" alt="LEFT"
                onClick={() => {
                    setPositionY('0px')
                    setPositionX('-200px')
                }}>
                    <img alt="left" src="https://cdn-icons-png.flaticon.com/512/109/109618.png" height="20px" width="30px" />
                </button>
                <button className="btn btn-outline-primary" alt="RIGHT"
                onClick={() => {
                    setPositionY('0px')
                    setPositionX('200px')
                }}>
                    <img alt="right" src="https://www.svgrepo.com/show/67689/right-arrow.svg" height="20px" width="30px" />
                </button>
                <button className="btn btn-outline-primary" alt="CLOCKWISE" 
                onClick={() => {
                    setClockWise(clockWise + 'rotate(30deg)')
                }}>
                    <img alt="clockWise" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/rotate-right-arrow-icon.png" height="20px" />
                </button>
                <button className="btn btn-outline-primary" alt="RESET" 
                onClick={() => {
                    setReset(() => {
                        setPositionX(0)
                        setPositionY(0)
                        setClockWise('rotate(0deg)')
                    })
                }}>
                    <img alt="antiClockwise" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Counterclockwise_Arrow.svg/1126px-Counterclockwise_Arrow.svg.png" height="20px" />
                </button>
            </div>
            <div style={{padding: '250px', backgroundColor: 'darkgrey'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
                    width="120px"
                    height="120px"
                    alt="imgPosition"
                    style={{marginTop: positionY, marginLeft: positionX, transform: clockWise}}
                />
            </div>
        </div>
    )
}

export default ImagePosition