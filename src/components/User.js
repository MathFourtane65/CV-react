import React from "react";
import "./User.css";

import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function User(){
    return (
        <div className="user">
            <img src="./images/avatar.png" alt="" className="user_avatar" />
            <h1 className="user_name">Mathieu Fourtané</h1>
            <p className="user_profession">Etudiant en informatique</p>
            <div className="user_infos">
                <p className="user_info">
                    <HomeIcon/>XX XX XX XXX XXXX XXXXX</p>
                <p className="user_info">
                    <LocalPhoneIcon/><a href="tel:+336XXXXXXXX">XX XX XX XX XX</a></p>
                <p className="user_info">
                    <MailIcon/><a href="mailto:XXXX.XXXX@gmail.com">XXXX.XXXX@gmail.com</a></p>
                <p className="user_info">
                    <EventIcon/>Date de naissance : 04 Mars 2000</p>
                <p className="user_info">
                    <LocationOnIcon/>Lieu de naissance : Tarbes</p>
            </div>
        </div>
    )
}

export default User
