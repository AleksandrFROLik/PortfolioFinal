import React from "react";
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import { Title } from "../common/components/title/Title";


export const Skills = () => {
    return(
        <div id='skills' className={styles.skillsBlock}>
            <div>
                <Title title='skills'/>
                <div className={styles.skills}>
                    <Skill title="HTML" description={"Any text"}/>
                    <Skill title="CSS" description={"Any text"}/>
                    <Skill title="JS" description={"Any text"}/>
                </div>
            </div>

        </div>
    )

}