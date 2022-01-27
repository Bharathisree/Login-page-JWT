import axios from "axios"
import jwt from 'jwt-decode' 
//const jwt = require("jsonwebtoken")

 export const Login = (res , history) => async dispatch => {
    let response = await axios.post('http://localhost:3000/login', res);
    if(response.status===200){
    const token = response.data.accessToken
    const decodeToken = jwt(token)
    console.log(decodeToken)

  //  if(response.status===200){
  //    history.push("/doctor")
  //  }else{
  //    history.push("/")
  //  }
        let data = response;
        alert("Logged In Successfully") 
        dispatch({     
          type: 'GET_Login',
          payload: data,
        }    
        )
      }       
    else{
      alert("Invalid Email or Password")
    }
}
    