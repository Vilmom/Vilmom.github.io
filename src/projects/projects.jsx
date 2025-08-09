import "./style.css";
import React, { useRef, useState } from 'react';
import Header from "../../components/header/header";

export const Projects = () => {
    const dialogRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (index) => {
        setSelectedProject(index);
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };

    function modal(name, packages, languages, description){
        return(
            <div className={"container1x2"} id={"modal-container"}>
                <div className={"left1x2"} id={"modal-img"}>
                    PICTURE
                </div>
                <div className={"right1x2"} id={"modal"}>
                    <div>{name}<br/></div>
                    <div>
                        Packages: {packages}<br/>
                        Languages: {languages}<br/><br/>
                        {description}
                    </div>
                </div>
                <div className={"right1x2"} id={"close"}>
                    <button className={"close"} onClick={closeModal}/>
                </div>
            </div>
        )
    }

    const projects = [
        {
            title: "Liar's Bar Web Game",
            content: (
                modal(
                    "Liar's Bar Web Game",
                    "mariaDB, Apache",
                    "React, CSS, PHP",
                    "This web game is based on the video game Liar's Bar with a maximum of 4 players. Players start with 5 cards and 3 drinks, one of which is poisoned. A card rank is then revealed to the table to start the game and players must either place down cards or call the last player's bluff. If a bluff is called, the player whose cards did not match the table's card rank or the accuser must take a drink and the round restarts. The game ends when all but one player is eliminated! Players must create an account, choose a profile picture, and make a nickname to play the game. Users can create a lobby for 4 players and ")
            ),
            img: ""
        },
        {
            title: "AI Trading Bot",
            content: (
                modal(
                    "AI Trading Bot",
                    "PyTorch, Transformers, Lumibot, Finbert_utils",
                    "Python",
                    "Utilized ProsusAI's Finbert artificial intelligence for financial sentiment analysis on news pulled from yahoo for stock predictions and paper trades on specified tickers. Paper trades were done through Alpaca markets and Lumibot to simulate decisions based on historical news and data."
                )
            )
        },
        {
            title: "Client-Server Communication Server",
            content: (
                modal(
                    "Client-Server Communication Channel",
                    "",
                    "Python",
                    "By utilizing "
                )
            )
        },
        {
            title: "Media Rater",
            content: (
                modal(
                    "Media Rater",
                    "Finbert",
                    "Python",
                    "Used Finbert"
                )
            )
        },
        {
            title: "Weather Forecast",
            content: (
                modal(
                    "Weather Forecast",
                    "Finbert",
                    "Python",
                    "Used Finbert"
                )
            )
        }
    ];

    return (
        <div className={"screen"} id={"contactBG"}>
            <div>
                <Header/>
            </div>
            <div className={"project-container"}>
                {projects.map((project, index) => (
                    <button
                        key={index}
                        className={"item"}
                        onClick={() => handleProjectClick(index)}
                    >
                        <div className={"item-img"}>

                        </div>
                        <div className={"item-txt"}>
                            {project.title}
                        </div>
                    </button>
                ))}
                <dialog ref={dialogRef}>
                    {selectedProject !== null && projects[selectedProject].content}
                </dialog>
            </div>
        </div>
    );
};