import "./style.css";
import placeholder from '../../assets/placeholder.JPG'
import Header from "../../components/header/header";

export const Contact = () => {
    return(
        <div className={"screen"} id={"contactBG"}>
            <div>
                <Header/>
            </div>
            <div className={"container1x2"}>
                <div className={"left1x2"}>
                    <span style={{fontSize: '60px'}}>Vilson Zheng</span>
                    <br/>
                    <span style={{fontSize: '30px', fontWeight: '400'}}>vilsonzheng@gmail.com<br/>(917) 420-2795<br/>Maspeth, NY</span>
                </div>
                <div className={"right1x2"}>
                    <img src={placeholder} alt={"placeholder image"}/>
                </div>
            </div>
        </div>
    );
}