import React, { useState } from "react";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [errorMesg, setErrorMesg] = useState("");
    const [successMesg, setSuccessMesg] = useState("");

    function signup() {
        console.log("hi")
        setErrorMesg("");
        setSuccessMesg("");
        if (name === "" || email === "" || password === "" || cnfPassword == "") {
            setErrorMesg("Error : All fields are mandatory!")
        }
        else if (name.trim().split(" ").length === 1) {
            setErrorMesg("Error : Please enter FullName!");
        }
        else if (!email.includes("@")) {
            setErrorMesg("Error : Please enter a valid email!");
        }
        else if (password !== cnfPassword) {
            setErrorMesg("Error : Password and Confirm Password did not match!");
        }
        else {
            setSuccessMesg("Signed Up Successfully.");
        }

    }

    return (
        <div className="form">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input type="password" onChange={(e) => setCnfPassword(e.target.value)} placeholder="Confirm Password" />

            <p className="succes">{successMesg}</p>
            <p className="error">{errorMesg}</p>

            <button className="btn" onClick={signup}> Sign up</button>
        </div>
    )

}

export default Form;