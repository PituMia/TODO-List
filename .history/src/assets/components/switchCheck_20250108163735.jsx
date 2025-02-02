import React from "react";
import CheckIcon from "../img/check.svg";

const SwitchCheck = () => {
    const [pressed, setPressed] = useState(false)
    const handlePressed = () => {
        setPressed(prevstate => !prevstate)
        console.log("cambio check")
    }
    return (
        <button className="btn" onClick={() => console.log('Task completed')}>

                    <img src={CheckIcon} alt="Check Icon" className="img" />

                </button>
    )


}

export default switchCheck