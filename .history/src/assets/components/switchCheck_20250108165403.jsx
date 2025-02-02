import React ,{useState} from "react";
import CheckIcon from "../img/check.svg";
import "../css/switchCheck.css"

const SwitchCheck = () => {
    const [pressed, setPressed] = useState(false)
    const handlePressed = () => {
        setPressed(prevstate => !prevstate);
        console.log("cambio check");
    }
    return (
        <button className="btn" onClick={handlePressed}>
           
                    <img src={CheckIcon} alt="Check Icon" className={`img ${pressed ? "img-pressed" : ""}`} />

                </button>
    )


}

export default SwitchCheck