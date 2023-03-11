import axios from 'axios';
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
    //console.log("Edit this in form: ");
    console.log(location.state)

    useEffect(() => {
        updateEditVideoid(location.state.editsong.videoid)
        updateEditVideoViews(location.state.editsong.views)
        updateEditVideoLikes(location.state.editsong.likes)
    }, [])

    let captureText = (event)=>{
        //console.log(event)
        //console.log(event.target)
        console.log(event.target.id)
        if (event.target.id === "id_videoid") {
            console.log("Editing videoid")
            console.log(event.target.value)
            updateEditVideoid(event.target.value)
        }
        if (event.target.id === "id_views") {
            console.log("Editing views")
            console.log(event.target.value)
            updateEditVideoViews(event.target.value)
        }
        if (event.target.id === "id_likes") {
            console.log("Editing likes")
            console.log(event.target.value)
            updateEditVideoLikes(event.target.value)
        }
    }


    let updateVideo=()=>{
        let updateVideoObject = {
            videoid: editvideoid,
            likes: editvideolikes,
            views: editvideoviews
        }
        console.log(updateVideoObject);
        //call update api to update video
        let id = location.state.editsong._id
        axios.put("https://joyous-erin-chameleon.cyclic.app/update/song/"  + id, updateVideoObject)
            .then((response)=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
            

    }

    return (
        <div>
            <div>
                <h1>Update song with id:</h1>
                <h3>Videoid: {editvideoid}</h3>
                <h3>Views: {editvideoviews}</h3>
                <h3>Likes: {editvideolikes}</h3>
            </div>
            <div style={{ fontSize: "20px" }}>
                <fieldset>
                    <legend>Edit Video</legend>
                    <div style={{ margin: "4px" }}>
                        <span style={{
                            display: "inline-block",
                            width: "100px"
                        }}>
                            Video Id:
                        </span>
                        <input type="text"
                            onChange={captureText}
                            id="id_videoid"/>
                    </div>
                    <div style={{ margin: "4px" }}>
                        <span style={{
                            display: "inline-block",
                            width: "100px"
                        }}>
                            Views:
                        </span>
                        <input type="number"
                            onChange={captureText}
                            id="id_views"/>
                    </div>
                    <div style={{ margin: "4px" }}>
                        <span style={{
                            display: "inline-block",
                            width: "100px"
                        }}>
                            Likes:
                        </span>
                        <input type="number"
                            onChange={captureText}
                            id="id_likes"/>
                    </div>
                    <div>
                        <button onClick={updateVideo}>Update</button>
                    </div>

                </fieldset>
            </div>

        </div>
    );
}

export default UpdateSong;