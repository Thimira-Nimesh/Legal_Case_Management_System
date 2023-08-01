// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "../Styles/Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Helpers/AuthContext";

// function Login() {
//   const [authState] = useState({
//     username: "",
//     id: 0,
//     status: false,
//   });

//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { setAuthState } = useContext(AuthContext);

//   const login = () => {
//     const data = { username: username, password: password };

//     axios
//       .post("http://localhost:3001/auth/auth2", data)
//       .then((response) => {
//         if (response.data.error) {
//           console.log(response);
//         } else {
//           const accessToken = response.data.accessToken;
//           localStorage.setItem("accessToken", accessToken);

//           const admin = JSON.parse(atob(accessToken.split(".")[1])); // Decoding the JWT payload
//           setAuthState(admin.usertype === "admin"); // Set auth state based on the usertype

//           navigate("/admin");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className=" gradient-border vh-90  outline">
//       <Container className=" vh-90">
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <div className="loginlogo w-45">
//               <img
//                 width="500"
//                 src="https://i.ibb.co/HgB9sQM/Screenshot-2023-06-05-194339-removebg-preview.png"
//                 alt="Img"
//                 className="img-fluid2"
//               />
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="login-box mt-1 p-2 ">
//               <div className="text-center mt-1">
//                 <h1 style={{ fontFamily: "Poppins', sans-serif" }}>
//                   <strong>Login</strong>
//                 </h1>
//               </div>
//               <br></br>
//               <div className="loginContainer">
//                 <label>
//                   <strong>Username:</strong>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   onChange={(event) => {
//                     setUsername(event.target.value);
//                   }}
//                 />
//                 <br></br>
//                 <br></br>
//                 <label>
//                   <strong>Password:</strong>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   onChange={(event) => {
//                     setPassword(event.target.value);
//                   }}
//                 />
//                 <br></br>
//                 <br></br>

//                 <Button className="btn btn-success w-100" onClick={login}>
//                   {" "}
//                   Login{" "}
//                 </Button>
//                 <br></br>
//                 <br></br>
//                 <div>
//                   <p>Don't have an account?</p>
//                   <Link to="/clientreg2" className="btn btn-secondary">
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Helpers/AuthContext";

function Login() {
  const [authState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const login = () => {
    const data = { username: username, password: password };

    axios
      .post("http://localhost:3001/auth/login", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          console.log(response);
        } else {
          const accessToken = response.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setAuthState(true);
          navigate("/home");

          // Redirect the user based on their usertype
          const user = JSON.parse(atob(accessToken.split(".")[1])); // Decoding the JWT payload
          switch (user.usertype) {
            case "admin":
              navigate("/admin");
              break;
            case "lawyer":
              navigate("/lawyerhome");
              break;
            case "client":
              navigate("/home");
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" gradient-border vh-90  outline">
      <Container className=" vh-90">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="loginlogo w-45">
              <img
                width="500"
                src="https://i.ibb.co/HgB9sQM/Screenshot-2023-06-05-194339-removebg-preview.png"
                alt="Img"
                className="img-fluid2"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="login-box mt-1 p-2 ">
              <div className="text-center mt-1">
                <h1 style={{ fontFamily: "Poppins', sans-serif" }}>
                  <strong>Login</strong>
                </h1>
              </div>
              <br></br>
              <div className="loginContainer">
                <label>
                  <strong>Username:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <br></br>
                <br></br>
                <label>
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <br></br>
                <br></br>
                <Button className="btn btn-success w-100" onClick={login}>
                  {" "}
                  Login{" "}
                </Button>
                <br></br>
                <br></br>
                <div>
                  <p>Don't have an account?</p>
                  <Link to="/clientreg2" className="btn btn-secondary">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
