import React from "react";
import { useState } from "react";

const ConCatName = () => {

    const firstName = ['Kiran', 'Ushal', 'bibek', 'pankaj', 'shyam','ajay']
    const lastName = {
        'Bibek': 'thapa',
        'Shyam': 'kaji',
        'Pankaj': 'rajbanshi',
        'Ushal': 'shrestha',
        'Ajay': 'khadki',
        'Kiran': 'kc'
    }

    const [fullName,setFullName] = useState([])

    const combinedName = () => {
        const firstNameToLowerCase = firstName.map((fnItem) => {
            return fnItem.toLowerCase().trim()
        })
        const lastNameToArr = Object.entries(lastName)
        const lastNameToLowerCase = lastNameToArr.map(([key,value]) => {
            return ([key.toLowerCase().trim(),value])
        })
        const lastNameToObj = Object.fromEntries(lastNameToLowerCase)
        const fullName1 = firstNameToLowerCase.map((item) => {
            return [item +' '+ lastNameToObj[item]]
        })
        setFullName([...fullName1])
    }


    return (

        <div className="container mt-5">
            <div className="card text-center">
                <div className="row mt-3">
                    <div className="column">
                        <h3>FIRST NAME</h3>
                        {firstName.map((fItem) => {
                            return (
                                <li>{fItem}</li>
                            )
                        })}
                    </div>
                    <div className="column">
                        <h3>LAST NAME</h3>
                        {Object.values(lastName).map((lItem) => {
                            return (
                                <li>{lItem}</li>
                            )
                        })}
                        <br />
                        <button className="btn btn-outline-primary" onClick={()=>combinedName()}>COMBINE NAME</button>
                    </div>
                    <div className="row">
                        <h3>FULLNAME</h3>
                        {fullName.map((fullItem) => {
                            return(
                                <li>{fullItem}</li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    );

}

export default ConCatName;