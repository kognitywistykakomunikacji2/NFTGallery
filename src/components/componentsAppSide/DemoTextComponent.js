import React from 'react';
import "./DemoTextComponent.scss"

const DemoTextComponent = () => {

    return (
        <div id="box">
        <header><h1>NFT image gallery display<h2>Widget Demo</h2></h1></header>
        <div id="divider"></div>
        <div id="text">
        <p>The widget is aimed at users who have a NFT gallery.
         Our goal is to provide a convenient and simple display of NFT images 
        on websites and mobile devices.
         The user has the option of placing the widget in any part of the page and customize it.</p>
        </div>
        <div id="divider"></div>
        <div id="punkt">
          <ul><b>The following functionalities are provided:</b>
          <li>theme switching (dark/light),</li>
            <li>responsive gallery design - gallery adjust its size depending on the screen resolution,</li>
            <li>gallery's content dependent on provided smart contracts.</li>
          </ul>
        </div>
        </div>
    )
};

export default DemoTextComponent;