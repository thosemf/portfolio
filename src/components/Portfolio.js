import React from "react";
import batteryPack from "./images/batteryPack.png";
import shittyAskElectronics from "./images/shittyAskElectronics.png";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1 className="portfolio-title">PROJECTS / ORGANIZATIONS</h1>
            <div className="projects">
                <div className="project">
                    <img src={batteryPack} alt="Battery Pack"/>
                    <div className="project-info">
                        <h3>3s2p 18650 Battery Pack</h3>
                        <p>High Amperage Power Bank / Portable PSU</p>
                    </div>
                </div>
            </div>
            <div className="organizations">
                <div className="organization">
                    <img src={shittyAskElectronics} alt="organization 1"/>
                    <a href="https://www.reddit.com/r/shittyaskelectronics/" target="_blank">ShittyAskElectronics</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
