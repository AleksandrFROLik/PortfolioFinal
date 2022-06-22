import React from "react";
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import todolist from '../assets/image/todolist.jpg'
import social from '../assets/image/social.jpg'
import {Title} from "../common/components/title/Title";



export const Projects = () => {
    const socialImage = {
        backgroundImage: `url(${social})`
    }
    const todolistImage = {
        backgroundImage: `url(${todolist})`
    }
    return (
        <div className={styles.worksBlock}>
            <div>
                <Title title='works'/>
                <div className={styles.works}>
                    <Project style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Project style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Project style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Project style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                </div>
            </div>

        </div>
    )

}