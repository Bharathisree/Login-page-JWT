import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const UserContainer = () => {
// const history=useHistory()   
//    const redirect=(name)=>{
//        console.log("FFF")
//     if(name==="Register"){
//         console.log("FFF")
//         history.push("/register")
//     }
//     if(name==="login"){
//     history.push("/login")
//     }
//     }
    return (
        <div> <center>
            <h3>WELCOME</h3>
            <div >
                <button > <Link to="/register">REGISTER</Link></button>
                &nbsp;
                <button ><Link to="/login">Login</Link></button>
            </div>
        </center>
        </div>
    );
};
export default UserContainer;