import React from "react";

import ComputerIcon from '@mui/icons-material/Computer';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HikingIcon from '@mui/icons-material/Hiking';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Interests() {
    return <div className="skills">
        <h2 className="h2">Centres d'intérêts</h2>
        <ul>
            <li>Nouvelles technologies</li>
            <li>Football</li>
            <li>Ski de piste</li>
            <li>Randonnée</li>
            <li>Formule 1</li>
        </ul>
        <div className="interests">
            <ComputerIcon style={{fontSize:40}} />
            <SportsSoccerIcon style={{fontSize:40}} />
            <SportsEsportsIcon style={{fontSize:40}} />
            <DownhillSkiingIcon style={{fontSize:40}} />
            <HikingIcon style={{fontSize:40}} />
        </div>

    </div>
}

export default Interests