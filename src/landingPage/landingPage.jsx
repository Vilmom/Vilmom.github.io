import "./style.css";
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import { gsap } from "gsap";

export const LandingPage = () => {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    var timeline;
    const timelineRef = useRef(null);
    var screen = '.screen';

    const handleKeyDown = useCallback((event) => {
        switch (event.key) {
            case "ArrowUp":
                return setSelection((prev) => Math.max(prev - 1, 0));
            case "ArrowDown":
                return setSelection((prev) => Math.min(prev + 1, 3));
            case "Enter":
                navigation(selection);
        }
    }, []);

    function buildTimeline(){
        timeline = gsap.timeline({paused: true});
        timeline.to(screen,{
            duration: .2,
            width: '100vw',
            height: '2px',
            background: '#ffffff',
            ease: "power2.out"
        })
            .to(screen,{
                duration: .2,
                width: '0',
                height: '0',
                background: '#ffffff'
            });
        timelineRef.current = timeline;
        return timeline;
    }

    function navigation(page){
        timeline.restart();
        setTimeout(() => {
            switch (page){
                case 0:
                    navigate("/projects");
                    break;
                case 1:
                    navigate("/education");
                    break;
                case 2:
                    navigate("/job-history");
                    break;
                case 3:
                    navigate("/contact");
            }
        }, 200);
    }

    useEffect(() => {
        const timeline = buildTimeline();
        timeline.progress(1);
        timeline.reverse();
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    const selected = (index) => ({
        backgroundColor: selection === index ? "#939393" : "black",
        color: selection === index ? "black" : "white",
    })

    return (
        <section className={"screen"}>
            <div className={"container"}>
                <div className={"left"}>
                    <div className={"filler"}></div>
                </div>
                <div className={"right"}>
                    <div className={"filler"}></div>
                </div>
                <div className={"header"}>
                    <div className={"filler"} id={"header"}>
                        <div className={"headerText"}>Vilson Zheng</div>
                    </div>
                </div>
                <div className={"bottom"}>
                    <div className={"footerText"}>Use ↑ and ↓ keys to select which entry is highlighted.<br/>Press enter
                        to select the section.
                    </div>
                </div>
                <div className={"middle"}>
                    <div className={"box"} id={"container"}>
                        <div className={"container1x4"}>
                            <button className={"top1x4"} style={selected(0)} onClick={() => navigation(0)}
                                    onMouseEnter={() => setSelection(0)}>
                                {selection === 0 ? "✱" : ""}Projects
                            </button>
                            <button className={"middleA1x4"} style={selected(1)} onClick={() => navigation(1)}
                                    onMouseEnter={() => setSelection(1)}>
                                {selection === 1 ? "✱" : ""}Education
                            </button>
                            <button className={"middleB1x4"} style={selected(2)} onClick={() => navigation(2)}
                                    onMouseEnter={() => setSelection(2)}>
                                {selection === 2 ? "✱" : ""}Job History
                            </button>
                            <button className={"bottom1x4"} style={selected(3)} onClick={() => navigation(3)}
                                    onMouseEnter={() => setSelection(3)}>
                                {selection === 3 ? "✱" : ""}Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};