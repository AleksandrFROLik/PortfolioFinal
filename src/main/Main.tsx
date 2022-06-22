import React from "react";
import styles from './Main.module.scss'
import buildImage from "./../assets/image/buildImage.jpg";

const mainImage = {
    backgroundImage: `url(${buildImage})`
}
export const Main = () => {
    return (
        <div id='main' className={styles.main} style={mainImage}>
            <div className={styles.mainContainer}>
                <div className={styles.textBlock}>
                    <span>Hi There</span>
                    <h1>I am Frolov Aleksander</h1>
                    <p>A Frontend developer</p>
                </div>
            </div>

        </div>
    )

}