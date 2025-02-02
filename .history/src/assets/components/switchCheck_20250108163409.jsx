import React from "react";

const switchCheck = () => {
    const [pressed, setPressed] = useState(false)
    const handlePressed = () => {
        setPressed(prevstate => !prevstate)
    }
    return (
        <button className="btn" onClick={() => console.log('Task completed')}>

                    <img src={CheckIcon} alt="Check Icon" className="img" />

                </button>
    )


}

export default switchCheck