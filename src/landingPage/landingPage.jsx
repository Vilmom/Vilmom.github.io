import "./style.css";
import React, {useState, useEffect, useCallback} from 'react';

export const LandingPage = () => {
    const [selection, setSelection] = useState(0);
    const handleKeyDown = useCallback((event) => {
        switch (event.key) {
            case "ArrowUp":
                return setSelection((prev) => Math.max(prev - 1, 0));
            case "ArrowDown":
                return setSelection((prev) => Math.min(prev + 1, 3));
            case "Enter":
                //Navigate to other page based on selection state
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const selected = (index) => ({
        backgroundColor: selection === index ? "#939393" : "black",
        color: selection === index ? "black" : "white",
    })

    return (
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
                <div className={"footerText"}>Use ↑ and ↓ keys to select which entry is highlighted.<br />Press enter to select the section.
                </div>
            </div>
            <div className={"middle"}>
                <div className={"box"} id={"container"}>
                    <div className={"container1x4"}>
                        <div className={"top1x4"} style={selected(0)}>
                            {selection === 0 ? "✱" : ""}Projects
                        </div>
                        <div className={"middleA1x4"} style={selected(1)}>
                            {selection === 1 ? "✱" : ""}Education
                        </div>
                        <div className={"middleB1x4"} style={selected(2)}>
                            {selection === 2 ? "✱" : ""}Job History
                        </div>
                        <div className={"bottom1x4"} style={selected(3)}>
                            {selection === 3 ? "✱" : ""}Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};