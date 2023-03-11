import React from 'react';
import Video from './video';

function Videolist() {
    return ( 
        <div>
            <h1>I will contain list of videos.</h1>
            <h2>Each video in list is video component.</h2>
            <Video videotitle="Strangest Sixth Sense Stories You Won’t Believe"
                    videoid="edE8n4roVEE"
                    likes="80" 
                    dislikes="10">
            </Video>
            <Video videotitle="Aman Gupta Unfiltered On TRS "
                    videoid="f2kNGLAAUdY"
                    likes="80000" 
                    dislikes="100">
            </Video>
            <Video  videotitle="Jay Shetty Returns On TRS "
                    videoid="mnD0Kc1PzIo"
                    likes="8444" 
                    dislikes="30">
           </Video>
            <Video  videotitle="Best of Favorite Dance Moves"
                    videoid="jOvmKHtbaUA"
                    likes="800" 
                    dislikes="20">
            </Video>
        </div>
     );
}

export default Videolist;