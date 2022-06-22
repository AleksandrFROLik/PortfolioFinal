import './App.css';
import {NavHeader} from './nav/NavHeader';
import {Main} from './main/Main';
import {AboutMe} from './aboutMe/AboutMe';
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";


export const App = () => (
    <div>
        <NavHeader/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Projects/>
    </div>
);
