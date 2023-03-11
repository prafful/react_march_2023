import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Help() {

    let [message, updateMessage] = useState("")
    let [allusers, updateAllusers] = useState([])

    //use useEffect hook to call api.
    useEffect(() => {
        callApi()
    }, [])

    //use axios to call API
    let callApi = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response)
                console.log(response.data)
                updateMessage("Success")
                updateAllusers(response.data)
            })
            .catch((error) => {
                console.log(error)
                updateMessage("Bad Request")
            })
    }

    let displayAllUsers = () => {
        return allusers.map((user) => {
            return (
                <div key={user.id}>
                    <li >
                        {user.name}
                    </li>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Help</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda dolorum amet sunt aliquam earum optio error, quos hic provident maiores dolore nam velit repellat commodi tempora numquam quis consequuntur porro.
            </p>
            <div>
                <h2>Message: {message}</h2>
            </div>
            <div>
                <h3>Length of allusers: {allusers.length}</h3>
                <ol>
                    {displayAllUsers()}
                </ol>

            </div>
        </div>
    );
}

export default Help;