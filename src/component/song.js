import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Song() {

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

    let renderAllSongs = () => {
        return allsongs.map(s => {
            return (
                <li key={s._id}>
                    {s.videoid}, 
                    <b>Views:</b> {s.views},
                    <b>Likes:</b> { s.likes}
                    <div>
                        <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + s.videoid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <br />
                    <button onClick={()=>{deleteById(s._id)}}>Delete</button>
                    <hr />
                </li>
            )
        })
    }

    let deleteById=(id)=>{
        console.log("Delete song by id: " + id)
        axios.delete("https://joyous-erin-chameleon.cyclic.app/delete/song/" + id)
            .then(response=>{
                console.log(response.data)
                callSongAPI()
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return (

        <div>
            <h1>List of songs from express API:</h1>
            <ol>
                {renderAllSongs()}
            </ol>
        </div>
    );
}

export default Song;