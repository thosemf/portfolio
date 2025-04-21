import React from "react";
import music from "./images/music.png";

const Home = () => {

    var songLink = "https://youtu.be/VLDXliIcbLI?si=zsoG6jt8UoauCO8Q";

    var gotw = ["house"]

    const isGotw = (id) => {
        for (let i = 0; i < gotw.length; i++) {
            if (gotw[i] === id) { return "isGotw"; }
        }
        return "";
    };
    
    return (
        <div className="home">
            <div className="image-container">
                <h2>Music of the week</h2>
                <a href={songLink} target="_blank">
                    <img className="blur-image" src={music} alt="INFRAVISION (Kendal & Pablo Bozzi) - That Beat In My Heart"/>
                    <div className="overlay-text">
                        INFRAVISION - That Beat In My Heart
                    </div>
                </a>
            </div>
            <div className="music-genre">
                <h2>Music genre(s) of the week</h2>
                <table className="music-table">
                    <tr className={`jpop ${isGotw("jpop")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">J-Pop</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`anime ${isGotw("anime")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Anime</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`synthwave ${isGotw("synthwave")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Synthwave</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`electro ${isGotw("electro")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Electro</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`house ${isGotw("house")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">House</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`trance ${isGotw("trance")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Trance</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`techno ${isGotw("techno")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Techno</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`rock ${isGotw("rock")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Rock</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`metal ${isGotw("metal")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">Metal</td>
                        <td className="subgenre-right"></td>
                    </tr>
                    <tr className={`bgm ${isGotw("bgm")}`}>
                        <td className="subgenre-left"></td>
                        <td className="main-genre">BGM</td>
                        <td className="subgenre-right"></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Home;