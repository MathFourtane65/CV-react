import React from "react";
import "./Skills.css";
import Skill from "./Skill"
import Interests from "./Interests";
import Projets from "./Projets";

function Skills(){
    return (
        <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            <Skill title="RIGUEUR" rating="4"/>
            <Skill title=" AUTONOMIE" rating="5"/>
            <Skill title="POLYVALENCE" rating="4"/>
            <Skill title="MS OFFICE" rating="4"/>
            <Skill title="TRAVAIL D'EQUIPE" rating="4"/>
        </div>
        <div className="skills">
            <h2 className="h2">langues</h2>
            <Skill title="Anglais" rating="4"/>
            <Skill title="Espagnol" rating="2"/>
        </div>
        <Interests />
        <Projets />
        </>
    )
}

export default Skills