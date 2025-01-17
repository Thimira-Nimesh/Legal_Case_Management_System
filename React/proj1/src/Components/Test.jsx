// import React from "react";
// import axios from "axios";
// import { useEffect, useState, useContext } from "react";
// import "../Styles/Test.css";
// import { useNavigate } from "react-router-dom";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import { AuthContext } from "../Helpers/AuthContext";

// function Test() {
//   const [listofcases, setlistofcases] = useState([]);
//   const navigate = useNavigate();
//   const { authState } = useContext(AuthContext);

//   useEffect(() => {
//     if (!authState.status) {
//       navigate("/login");
//     } else {
//       axios.get("http://localhost:3001/cases").then((response) => {
//         setlistofcases(response.data);
//       });
//     }
//   }, []);

//   const likeAPost = (caseId) => {
//     axios
//       .post(
//         "http://localhost:3001/noted",
//         { CaseId: caseId },
//         { headers: { accessToken: localStorage.getItem("accessToken") } }
//       )
//       .then((response) => {
//         alert(response.data);
//       });
//   };

//   return (
//     <div className="Test1">
//       {listofcases.map((value, key) => {
//         return (
//           <div key={key} className="cases">
//             <div className="casetitle">Case Code: {value.CaseCode}</div>
//             <div className="body1">Case Title: {value.CaseTitle}</div>
//             <div
//               className="body"
//               onClick={() => {
//                 navigate(`/viewcase/${value.id}`);
//               }}
//             >
//               Description: {value.CaseFile}{" "}
//             </div>
//             <div className="body2">Assigned Lawyer:{value.CaseLawyer}</div>
//             <div className="body3">
//               Case Owner: {value.CaseOwner}{" "}
//               <DoneAllIcon
//                 className="notedbtn"
//                 onClick={() => {
//                   likeAPost(value.id);
//                 }}
//               />
//               <label className="notelabel">{value.Noted?.length}Noted</label>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Test;

import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "../Styles/Test.css";
import { useNavigate } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { AuthContext } from "../Helpers/AuthContext";

function Test() {
  const [listofcases, setlistofcases] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // State to store the search input
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState.status) {
      navigate("/login");
    } else {
      axios.get("http://localhost:3001/cases").then((response) => {
        setlistofcases(response.data);
      });
    }
  }, []);

  const likeAPost = (caseId) => {
    axios
      .post(
        "http://localhost:3001/noted",
        { CaseId: caseId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        alert(response.data);
      });
  };

  // Filter cases based on the search input
  const filteredCases = listofcases.filter((value) =>
    value.CaseCode.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="Test1">
      {/* Add the search bar */}
      <input
        type="text"
        placeholder="Enter case code..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {filteredCases.map((value, key) => {
        return (
          <div key={key} className="cases">
            <div className="casetitle">Case Code: {value.CaseCode}</div>
            <div className="body1">Case Title: {value.CaseTitle}</div>
            <div
              className="body"
              onClick={() => {
                navigate(`/viewcase/${value.id}`);
              }}
            >
              Description: {value.CaseFile}{" "}
            </div>
            <div className="body2">Assigned Lawyer:{value.CaseLawyer}</div>
            <div className="body3">
              Case Owner: {value.CaseOwner}{" "}
              <DoneAllIcon
                className="notedbtn"
                onClick={() => {
                  likeAPost(value.id);
                }}
              />
              <label className="notelabel">{value.Noted?.length}Noted</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
