import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateSong() {

    let [editvideoid, updateEditVideoid] = useState("")
    let [editvideoviews, updateEditVideoViews] = useState(0)
    let [editvideolikes, updateEditVideoLikes] = useState(0)
    //use useLocation() hook to get information about location
    //if any parameters are received in this location, then
    //then will be available in location instance
    let location = useLocation()
    //console.log(location)
    console.log("Edit this in form: ");
    console.log(location.state)

    useEffect(() => {
        updateEditVideoid(location.state.editsong.videoid)
        updateEditVideoViews(location.state.editsong.views)
        updateEditVideoLikes(location.state.editsong.likes)
    }, [])


    return (
        <div>
            <div>
                <h1>Update song with id:</h1>
                <h3>Videoid: {editvideoid}</h3>
                <h3>Views: {editvideoviews}</h3>
                <h3>Videoid: {editvideolikes}</h3>
            </div>
            <div>
                
            </div>

        </div>
    );
}

export default UpdateSong;