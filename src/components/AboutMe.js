import React from "react";
import fotoProfil from "./images/foto.jpg";

const AboutMe = () => {

    var wired = "https://letmegooglethat.com/?q=Tangzu+Wan'er+S.G."
    var wireless = "https://letmegooglethat.com/?q=Soundpeats+Truengine+3SE"
    var simgot = "https://letmegooglethat.com/?q=Simgot+EW200"
    var apo = "https://equalizerapo.com/"

    return (
        <div className="aboutme">
            <div className="profile-container">
                <div className="profile-image">
                    <img src={fotoProfil} alt="Profile Image"/>
                </div>
                <div className="profile-name">M.Fahmi Maulidiansyah</div>
            </div>
            <article className="about-article">
                <p>
                    I'm an introverted guy with no money, no talent, no nothin'!. Yet does not really put much 
                    efforts on school work. I just dont think working hard is any worth it as learning something 
                    you actually passionate at and making good memories. But who in hell cares ...
                </p>
                <p>
                    But even though I'm a useless piece of shit, I have some hobbies which im very passionate at. 
                    Which are gaming, listening to music, and im also an audiophile (short of) myself.
                </p>
                <p>
                    I sometime game when i dont have nothing to do (besides listening to music). 
                    Apparently I'm considered pretty edgy when it comes to game taste (probably music too?). 
                    I'm a fan of Touhou Project, Plants vs Zombies, and Minecraft.
                </p>
                <p>
                    I listen to music like A LOT. A day without music is basically like gaming with bgm off to me. 
                    I listen to music everytime I can. I can never go anywhere without a set of iem or earbuds. 
                    My top 5 genres are J-Pop, Anime, House, Trance, Rock.
                </p>
                <p>
                    Not only I like the topic of music, but also the topic about the drivers and such. 
                    My daily drivers are <a href={wired} target="_blank">Tangzu Wan'er S.G.</a> for wired and <a href={wireless} target="_blank">Soundpeats Truengine 3SE</a> for wireless. 
                    That earbuds was a mistake honestly. Because I'm aiming for neutral sound profile, 
                    but thats the one of the only option for budget in ear ear tws I have. 
                    I really did not expect it to be THAT BASSY. But with basic eq-ing skill using <a href={apo} target="_blank">Equalizer Apo</a>, 
                    I think it turned out to be pretty fine. 
                    Though I definitely still prefer the neutral Tangzu Wan'er. Wish i can afford that 
                    sweet and clear <a href={simgot} target="_blank">Simgot EW200</a> at the time.
                </p>
            </article>
        </div>
    )
}

export default AboutMe;
