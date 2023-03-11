import React from 'react';

function Videoplayer(props) {
    return ( 
        <div>
             <h3 >Id: <span style={{color:"grey"}}>{props.videoid}</span></h3>
            <div>
                <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + props.videoid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
     );
}

export default Videoplayer