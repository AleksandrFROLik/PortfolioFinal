import React from 'react';
import styled from './AboutMe.module.scss'
import {Title} from "../common/components/title/Title";

export const AboutMe = () => {
    return (
        <div id='aboutME' className={styled.root}>
            <Title title='About me'/>
        </div>
    );
};

