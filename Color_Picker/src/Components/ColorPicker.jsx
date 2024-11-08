import React,{ useState } from "react";

function ColorPicker() {
    let [color,setColor] = useState("#ffff21");

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return(
        <div className="container">
            <h2 className="headingtext">Color Picker</h2>
            <div className="color-container" style={{backgroundColor:color}}>
                <p>color:{color}</p>
            </div>
            <label className="inputtext">Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}
export default ColorPicker;