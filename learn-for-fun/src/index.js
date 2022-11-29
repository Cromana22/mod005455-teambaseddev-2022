import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Courses from "./components/Courses";
import Course from "./components/Course";
import Signup from './components/Signup';
import AccountPage from "./components/AcountPage";
import Subscription from "./components/Subscription";
import GameListPage from "./components/GameListPage";
import GamePage from "./components/GamePage";
import './index.css';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/course/:courseID" element={<Course />} />
      <Route path="/course/:courseID/subscribe" element={<Subscription />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/myaccount" element={<AccountPage />} />
      <Route path="/games" element={<GameListPage />} />
      <Route path="/games/:id" element={<GamePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);