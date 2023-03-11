import axios from 'axios';
import React, { useState } from 'react';

function About() {

    let [videoid, updateVideoid] = useState("")  
    let [likes, updateLikes] = useState(0)
    let [views, updateViews] = useState(0)




    let captureId=(event)=>{
        //console.log("Hello")
        console.log(event.target.value)
        updateVideoid(event.target.value)
    }

    let captureLikes=(event)=>{
        //console.log("Hello")
        console.log(event.target.value)
        updateLikes(event.target.value)
    }

    let captureViews=(event)=>{
        //console.log("Hello")
        console.log(event.target.value)
        updateViews(event.target.value)
    }

    let createInputObject=()=>{
        let newVideo = {
            "videoid":videoid,
            "views":views,
            "likes": likes
        }
        console.log(newVideo)
        axios.post("https://joyous-erin-chameleon.cyclic.app/add/song", newVideo)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }


    return ( 
        <div>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas qui eveniet saepe adipisci esse dolorum, id ab molestias nemo error asperiores. Non eaque temporibus modi. Quasi laboriosam dolorum saepe!
            </p>
            <div>
                <fieldset>
                    <legend>Add video</legend>

                    Video id: 
                    <input type="text" onChange={captureId}/> <br />
                    Likes: 
                    <input type="number" onChange={captureLikes}/> <br />
                    Views:
                    <input type="number" onChange={captureViews}/><br /><br />
                    <button onClick={createInputObject}>Add</button>

                    <div>
                        Videoid: {videoid} <br />
                        Likes: {likes} <br />
                        Views: {views}
                    </div>
                </fieldset>
            </div>
        </div>
     );
}

export default About;