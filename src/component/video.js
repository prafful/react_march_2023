import React from 'react';
import Videoaction from './videoaction';
import Videoplayer from './videoplayer';
import Videotitle from './videotitle';

function Video(props) {

    console.log(props)

    return (
        <div style={{
            border:"4px solid lightgreen",
            margin:"4px",
            padding:"4px",
            width:"40%"
        }}>
            <div >
                <Videotitle title={props.videotitle}></Videotitle>
            </div>

            {/* Below is view of videoplayer component*/}
            <div>
                <Videoplayer videoid={props.videoid}></Videoplayer>
            </div>
              {/* Below is view of videoaction component*/}
           <div>
            <Videoaction likes={props.likes} dislikes={props.dislikes}></Videoaction>
           </div>
          
           
        </div>
    );
}

export default Video;
