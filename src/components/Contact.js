import React, { useState } from "react";
import github from "./images/github-mark.png";
import discord from "./images/discord.png";
import reddit from "./images/reddit.png";

const Contact = () => {
    const [isSending, setIsSending] = useState(false);

    const send = (event) => {
        event.preventDefault();
        const elements = event.target.getElementsByClassName("form-group");
        let isValid = true;
        for (let i = 0; i < elements.length; i++) {
            const input = elements[i].querySelector("input, textarea");
            if (input && input.value.trim() === "") {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            setIsSending("isSending");
            setTimeout(() => {
                window.location.reload();
            }, 750);
        } else {
            setIsSending("invalid");
            setTimeout(() => {
                setIsSending("");
            }, 250);
        }
    };

    return (
        <div className="contact">
            <div className="input-container">
                <form onSubmit={send}>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Message" />
                    </div>
                    <button className={`mail ${isSending}`} type="submit">
                        {isSending === "isSending" ? (<div className="loader"></div>) : "Kirim ➤"}
                    </button>
                </form>
            </div>
            <div className="logo-container">
                <div className="social-media">
                    <a className="logos" href="https://github.com/thosemf" target="_blank">
                        <img src={github} alt="GitHub" />
                    </a>
                    <a className="links" id="github" href="https://github.com/thosemf" target="_blank">
                        ThoseMF
                    </a>
                </div>
                <div className="social-media">
                    <a className="logos" href="https://discord.com/users/thosemf" target="_blank">
                        <img src={discord} alt="Discord" />
                    </a>
                    <a className="links" id="discord" href="https://discord.com/users/thosemf" target="_blank">
                        ThoseMF
                    </a>
                </div>
                <div className="social-media">
                    <a className="logos" href="https://www.reddit.com/user/MCP453" target="_blank">
                        <img src={reddit} alt="Reddit" />
                    </a>
                    <a className="links" id="reddit" href="https://www.reddit.com/user/MCP453" target="_blank">
                        MCP453
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
