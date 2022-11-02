import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import Register from "./components/Register";
import Courses from "./components/Courses";
import Course from "./components/Course";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Form />} />
      <Route path="/register" element={<Register />} />
      <Route path="/course" element={<Course />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);