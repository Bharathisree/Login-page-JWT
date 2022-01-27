import axios from "axios"
 export const Register = (value) => async dispatch => {
    let res = await axios.post('http://localhost:3000/register', value);
    if(response.status===201){
      let data = res;
    console.log(data); 
    alert("Registered Successfully") 
    dispatch({     
      type: 'GET_REGISTER',
      payload: data,
    }    
    )
    
    }else{
      alert("Register Again")
    }
    
  // }else{
  //   alert("Fill the Registeration Form")
  // }
}
    
   

  
//const response = await axios.post("localhost:3000/register")
  // if (response.status == 200) {
  //   const respon=response.data
  //   console.log(respon)
  //   dispatch({     
  //     type: 'GET_DATA',
  //     payload: respon,
  //   }    
  //   )
  
  //  console.log("Action",value)
  //  const respon= value       

     
 
