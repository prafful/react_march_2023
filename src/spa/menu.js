import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
    return ( 
        <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/about">Add Video</Link> &nbsp;
            <Link to="/youtube">Youtube</Link> &nbsp;
            <Link to="/help">Help</Link> &nbsp;
            <Link to="/song">Get Videos</Link> &nbsp;
      
        </div>
     );
}

export default Menu;