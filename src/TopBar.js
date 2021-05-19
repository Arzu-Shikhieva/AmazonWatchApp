import React from 'react';
import classes from "./TopBar.module.css";
import img from "./img/amazon_PNG25.png";

function TopBar(props) {
    return (
        <header>
            <nav className={classes.TopBar}>
                <img src={img} alt='Amazon logo'/>
            </nav>
        </header>
    );
}

export default TopBar;