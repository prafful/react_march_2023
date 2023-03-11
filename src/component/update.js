import React from 'react';
import { useLocation } from 'react-router-dom';

function UpdateSong() {

    //use useLocation() hook to get information about location
    //if any parameters are received in this location, then
    //then will be available in location instance
    let location = useLocation()
    //console.log(location)
    console.log("Edit this in form: ");
    console.log(location.state)

    return ( 
        <div>
            <h1>Update song with id:</h1>
        </div>
     );
}

export default UpdateSong;