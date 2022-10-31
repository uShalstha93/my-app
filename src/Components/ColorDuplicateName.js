import React from 'react'

const ColorDuplicateName = () => {

    const arr = ['shyam', 'ram', 'hari', 'geeta', 'ram']

    const filtered = arr.filter((item, id) => {
        const duplicate = arr.indexOf(item)
        if (duplicate !== id) {
            console.log(item)
            return item
        }
        // return duplicate
    })
    console.log(filtered)

    return (

        <div className="container">
            <h3>Name list</h3>
            {arr.map((item, id) => {
                return (
                    <li style={{ color: filtered[0] === item ? "red" : null }}>{item}</li>
                )
            })}
            {/* {checkDuplicateName} */}
        </div>

    )
}

export default ColorDuplicateName