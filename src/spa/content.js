import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../component/about';
import Help from '../component/help';
import Song from '../component/song';
import Videolist from '../component/videolist';
import Youtube from '../component/youtube';

function Content() {
    return ( 
        <Routes>
            <Route path='/' element={<Youtube></Youtube>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/youtube' element={<Videolist></Videolist>}></Route>
            <Route path='/help' element={<Help></Help>}></Route>
            <Route path='/song' element={<Song></Song>}></Route>
        </Routes>
     );
}

export default Content;