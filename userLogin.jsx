import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, TextField, } from "@material-ui/core";
import { Login } from '../action/userLoginAction';
import PasswordField from 'material-ui-password-field';
//import { useHistory } from 'react-router-dom';

const Userlogin = () => {
    const dispatch = useDispatch()
   //const history=useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [erremail, setErremail] = useState("Enter The Email")
    const [errpassword, setErrpassword] = useState("Fill the password")

    const handleChange = (e) => {
        if (e.target.name === "useremail") {
            setEmail(e.target.value)
            setErremail("success")
        }
        if (e.target.name === "userpassword") {
            // setPassword(e.target.value)
            // setErrpassword("success")
            if (e.target.value.length < 8) {
                setPassword(e.target.value)
        
            } else {
                setErrpassword("valid password")
            }
        }
    }
    
    const handlesubmit = () => {
        if (!email || !password) {
            alert("Please fill all the Fields") 
          }
        if ((/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/).test(email)) {
            setEmail(email)
            
        } else {
            setErremail("valid Email")
        }
        const value = { email, password }
        console.log("data", value)
        dispatch(Login(value))
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <div>
                <form>
                    <center>
                        <p><b>SIGN IN </b></p>
                        <div >
                            
                            &nbsp; &nbsp;
                            <TextField name="useremail" type="email" value={email} onChange={handleChange} helperText={erremail} placeholder="Email"  />
                            <br></br>
                            <br></br>
                         
                            &nbsp;
                            &nbsp;
                            <PasswordField name="userpassword" placeholder="Password" type="password" onChange={handleChange} variant="filled" />
                            <br></br>
                            <br></br>
                            <div><Button onClick={handlesubmit} variant="contained" color="primary">Submit</Button></div>
                        </div>
                    </center>
                </form>
                <div className="Action"><Button> <Link to="/">BACK</Link></Button></div>
            </div>
        </div>
    )
}


export default Userlogin;

