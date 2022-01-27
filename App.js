import './App.css';
// import Registration from './components/registeration'; 
//import RegisterPage from './components/RegisterPage'
import { Provider } from 'react-redux';
import Store from './store';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UserContainer from './redux/container/userContainer.jsx';
import Userregister from './redux/container/userRegister';
import Userlogin from './redux/container/userLogin';
import { Doctor } from './redux/container/doctor';
function App() {
  return (
    <div>

      {/* <Registration --class /> */}
      {/* <RegisterPage --Functional /> */}
      <Provider store={Store}>
      {/* <Userregister /> */}
        <BrowserRouter>       
          <Routes>
           <Route path="/" element={<UserContainer />} />
           <Route path="/register" element={ <Userregister />} />
           <Route path="/login" element={ <Userlogin />} />  
           <Route path="/doctor" element={ <Doctor/>} />    
           </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
