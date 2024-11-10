import React,{ useState } from "react";

function Object() {
    let [student, setStudent] = useState([]);
    let [id, setId] = useState(0);
    let [name, setName] = useState("");
    let [course, setCourse] = useState("");

    function addStudent() {
        const newStudent = {
            s_id:id,
            s_name:name,
            s_course:course
        };

        setStudent((s) => [...s,newStudent]);

        setId(0);
        setName("");
        setCourse("");
    }

    function removeStudent(index) {
        setStudent(s => s.filter((_,idx) => idx !== index));
    }

    function handleIdChange(event) {
        setId(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCourseChange(event) {
        setCourse(event.target.value);
    }

    return(
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>

                <ul>
                    {student.map((student,index) => <li  key={index} onClick={() => removeStudent(index)} style={{color:"white"}}>{student.s_id} {student.s_name} {student.s_course}</li> )}
                </ul>

                <label style={{color:"white"}}>Enter the student information</label>
                    <br/>
                    <input type="number" value={id} onChange={handleIdChange}/>
                    <br/>
                    <input type="text" value={name} onChange={handleNameChange}/>
                    <br/>
                    <input type="text" value={course} onChange={handleCourseChange}/>
                    <br/>
                    <button onClick={addStudent}>Submit</button>
            </div>
        );
}

export default Object;