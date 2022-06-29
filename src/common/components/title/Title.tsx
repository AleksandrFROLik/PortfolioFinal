import React from "react";
import styles from './Title.module.scss'

type TitleType = { title:string }

export const Title = ({title}:TitleType) => {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
            <div className={styles.subLine}/>
        </div>
    )
}