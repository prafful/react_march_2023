/*
This is root component. Global parent
*/

import React from 'react';
import Videolist from '../component/videolist';
import Content from '../spa/content';
import Menu from '../spa/menu';


//create a function which will act as a component
//it is a functional component
//It will return the view which will be 
//visible in the browser

function Root() {
    //return the view to be visible in 
    //the browser

    //It returns JSX
    return ( 
        <div>
            <Menu></Menu>
            <Content></Content>
            {/* <h1>I am a root component</h1>
            <Videolist></Videolist> */}
        </div>
     );
}

export default Root;
