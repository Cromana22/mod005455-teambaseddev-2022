import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);