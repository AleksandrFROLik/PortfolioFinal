import React from "react";
import styles from './Main.module.scss'
import buildImage from "./../assets/image/buildImage.jpg";
import {Title} from "../common/components/title/Title";

const mainImage = {
    backgroundImage: `url(${buildImage})`
}
export const Main = () => {
    return (
        <div id='main' className={styles.main} style={mainImage}>
            <div className={styles.mainContainer}>
                <div className={styles.textBlock}>
                    <span>Hi There</span>
                    <Title title='I am Frolov Aleksander'/>
                    <p>A Frontend developer</p>
                </div>
            </div>
        </div>
    )

}