import React, { useState } from 'react'

function Videoaction(props) {

    let actionStyle = {
        border:"1px solid black",
        borderRadius:"10px",
        padding:"5px",
        margin:"5px"
     }
    // [statevariable, function_who_can_change_state_variable]
    let [likestate, iCanChangeLikeState] = useState(parseInt(props.likes))
    let [dislikestate, iCanChangeDisLikeState] = useState(parseInt(props.dislikes))

    let increaseLikes=()=>{
        console.log("Hello function!")
       // props.likes = props.likes + 1
        //function_who_can_change_state_variable -> working
        //function_name(newvalue_of_state)
       iCanChangeLikeState(likestate+1)
    }

    return (  
        <div>
             <div style={actionStyle}>
                Likes: <b style={{color:"green"}}>{likestate} </b>
                &nbsp;
                <button onClick={increaseLikes}
                        style={{
                            color:"blue",
                            backgroundColor:"pink",
                            margin:"2px"
                        }}>+ Likes</button>
                <br />
                Dislikes: <b style={{color:"red"}}>{dislikestate}</b>
                &nbsp;
                <button style={{
                                color:"red", 
                                backgroundColor:"yellow",
                                margin:"2px"
                                }}>+ Dislikes</button>
           

            </div>
            <div style={actionStyle}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque dolores beatae eius recusandae dolore magni, odit doloribus quae facilis fugiat dolorem blanditiis quia sit maiores aperiam minus dignissimos et.</p>
            </div>
        </div>
    );
}

export default Videoaction
