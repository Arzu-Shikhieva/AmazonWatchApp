import React from 'react';
import img from "./img/amazon_PNG25.png";
import classes from "./ProductPreview.module.css";


function ProductPreview(props) {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt="Product review"/>

            {
                props.showHeartBeatSection === 1 ? (
                    <div className={classes.HeartBeatSection}>
                        <i className='fas fa-heartbeat'></i>
                        <p>78</p>
                    </div>
                ) : (
                    <div className={classes.TimeSection}>
                        <p>{`${currentHour}:${currentMinute}`}</p>
                    </div>
                )
            }

        </div>
    );
}

export default ProductPreview;