import React ,{useState} from "react";
import CheckIcon from "../img/check.svg";
import "../css/switchCheck.css"

const SwitchBtn = ({pressed}) => {
    const [pressed, setPressed] = useState(false)
    const handlePressed = () => {
        setPressed(prevstate => !prevstate);
        console,log("switch")
    }
    


}

export default SwitchBtn