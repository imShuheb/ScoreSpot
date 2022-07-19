import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Register from './components/Register'
import Profile from './components/Profile'
import Home from "./components/home/Home";
import MyProfile from "./components/home/MyProfile";
import Login from "./components/Login";
import UserState from "./context/Profile/ProfileState";
import Teams from "./context/User/UserState";
import CreateTeam from './components/Tournment/Team/CreateTeam'


function App() {
  return (
    <>
    <UserState>
      <Teams>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teams" element={<CreateTeam />} />
          <Route path="/myProfile" element={<MyProfile/>} />
        </Routes>
      </BrowserRouter>
      </Teams>
    </UserState>
    </>
  );
}

export default App;
