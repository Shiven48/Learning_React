// name age isAdult description radio
import React,{useState} from "react";

function Form() {
    let [name, setName] = useState("Guest")
    let [age, setAge] = useState(0);
    let [isAdult, setIsAdult] = useState(true);
    let [description, setDescription] = useState("");
    let [gender, setGender] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleIsAdultChange = (event) => {
        setIsAdult(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    return(
        <div className="counter-container">
            <input value={name} onChange={handleNameChange}/>
            <p>Name:{name}</p>

            <input value={age} onChange={handleAgeChange} type="number"/>
            <p>Age:{age}</p>

            <textarea value={description} onChange={handleDescriptionChange} placeholder="Add description"/>
            <p>Description:{description}</p>

            <select value={gender} onChange={handleGenderChange}>
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
             </select>
             <p>Gender:{gender}</p>
             
            <label>
                <input type="radio" value= {true} checked={isAdult === true} onChange={handleIsAdultChange}/>
                Adult
            </label>
            <label>
                <input type="radio" value= {false} checked={isAdult === false} onChange={handleIsAdultChange}/>
                Non-Adult
            </label>
            <p>isAdult: {isAdult}</p>

        </div>
    );
}
export default Form;