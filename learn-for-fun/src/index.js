import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Courses from "./components/Courses";
import Course from "./components/Course";
import Signup from './components/signup';
import AccountPage from "./components/AcountPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/course" element={<Course />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/myaccount" element={<AccountPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);