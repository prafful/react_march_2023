import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Song() {

    //intialize useNavigate() hook for code based navigation
    let navigate = useNavigate()

    let [allsongs, updateAllSongs] = useState([])

    useEffect(() => {
        callSongAPI()
    }, [])


    let callSongAPI = () => {
        axios.get("https://joyous-erin-chameleon.cyclic.app/get/songs")
            .then(response => {
                //console.log(response)
                console.log(response.data)
                updateAllSongs(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    let navigateToUpdatePage = (sng) => {
        console.log("Edit song")
        console.log(sng)
        console.log("Navigate to update page")
        navigate("/update", {
            state: {
                editsong: sng
            }
        })

    }

    let renderAllSongs = () => {
        return allsongs.map(s => {
            return (
                <li key={s._id}>
                    {s.videoid},
                    <b style={{ color: "red" }}>Views:</b> {s.views},
                    <b style={{ color: "red" }}>Likes:</b> {s.likes}
                    <div>
                        <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + s.videoid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <br />
                    <button onClick={() => { deleteById(s._id) }}>Delete</button>
                    &nbsp;
                    <button onClick={() => { navigateToUpdatePage(s) }}>
                        Update
                    </button>
                    <hr />
                </li>
            )
        })
    }

    let deleteById = (id) => {
        console.log("Delete song by id: " + id)
        axios.delete("https://joyous-erin-chameleon.cyclic.app/delete/song/" + id)
            .then(response => {
                console.log(response.data)
                callSongAPI()
            })
            .catch(error => {
                console.log(error)
            })
    }


    if (allsongs.length === 0) {
        return (
            <div>
                <h1>Allsongs count: {allsongs.length}</h1>
                <h1 style={{ color: "lightgreen" }}>
                    Loading....
                </h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Allsongs count: {allsongs.length}</h1>
                <h1>List of songs from express API:</h1>
                <ol>
                    {renderAllSongs()}
                </ol>
            </div>
        )
    }



}

export default Song;