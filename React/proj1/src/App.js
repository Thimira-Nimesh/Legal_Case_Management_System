import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Cases from "./Components/Cases";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectionPage from "./Components/Selection";
import ClientForm from "./Components/Client-signup";
import LawyerForm from "./Components/Lawyer-signup";
import JudgeForm from "./Components/Judge-signup";
import Appointment from "./Components/Appointment";
import Viewappointments from "./Components/Viewappointments";
import Lawyerhome from "./Components/Lawyerhome";
import Judgehome from "./Components/Judgehome";
import DailySchedule from "./Components/DailySchedule";
// import PrivateRoute from "./Components/PrivateRoute";
// import Home from "./Components/Home";

import Test from "./Components/Test";
import Clientreg2 from "./Components/Clientreg2";
import Lawyerreg2 from "./Components/Lawyerreg2";
import "../src/Helpers/AuthContext";
import { AuthContext } from "../src/Helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth2", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
    setAuthState(true);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/clientreg2" element={<Clientreg2 />} />
          <Route path="/lawyerreg2" element={<Lawyerreg2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clientform" element={<ClientForm />} />
          <Route path="/lawyerform" element={<LawyerForm />} />
          <Route path="/judgeform" element={<JudgeForm />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/viewappointment" element={<Viewappointments />} />
          <Route path="/lawyerhome" element={<Lawyerhome />} />
          <Route path="/judgehome" element={<Judgehome />} />
          <Route path="/dailyschedule" element={<DailySchedule />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
