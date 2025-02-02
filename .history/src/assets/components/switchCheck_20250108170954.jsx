import React ,{useState} from "react";
import CheckIcon from "../img/check.svg";
import "../css/switchCheck.css"

const SwitchCheck = () => {
    const [pressed, setPressed] = useState(false)
    const handlePressed = () => {
        setPressed(prevstate => !prevstate);
        pressed ? console.log("cambio true") : console.log("cambio false"),
    }
    return (
        <button className="btn" onClick={handlePressed}>
           
                    <img src={CheckIcon} alt="Check Icon" className={`img ${pressed ? "img-pressed" : ""}`} />

                </button>
    )


}

export default SwitchCheck