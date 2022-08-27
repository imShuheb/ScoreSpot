import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Register from './components/Register'
import Profile from './components/Profile'
import Home from "./components/home/Home";
import MyProfile from "./components/home/MyProfile";
import Login from "./components/Login";
import ProfileState from "./context/Profile/ProfileState";
import TeamsState from "./context/User/UserState";
import Matches from "./components/Tournment/matches/Matches"
import TeamList from './components/Tournment/Team/TeamList'
import CreateTeam from './components/Tournment/create/CreateTeam'
import Score from './components/LiveScore/Score';
import Live from './components/LiveScore/Live';
import Maps from './components/maps/Maps'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

function App() {
  return (
    <>
      <ProfileState>
        <TeamsState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/reg" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/createteams" element={<CreateTeam />} />
              <Route path="/teams" element={<TeamList/>} />
              <Route path="/schedule" element={<Matches />} />
              <Route path="/startscore" element={<Score/>} />
              <Route path="/live-server" element={<Live/>} />
              <Route path="/maps" element={<Maps/>} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/scoreBoard" element={<ScoreBoard />} />

            </Routes>
          </BrowserRouter>
        </TeamsState>
      </ProfileState>
    </>
  );
}

export default App;
