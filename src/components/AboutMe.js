import React from "react";
import fotoProfil from "./images/foto.jpg";

const AboutMe = () => {

    var apo = "https://equalizerapo.com/"

    return (
        <div className="aboutme">
            <div className="profile-container">
                <div className="profile-image">
                    <img src={fotoProfil} alt="Profile Image"/>
                </div>
                <div className="profile-name">ThoseMF</div>
            </div>
            <article className="about-article">

            </article>
        </div>
    )
}

export default AboutMe;
