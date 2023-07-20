import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Viewcase.css";
import { AuthContext } from "../Helpers/AuthContext";

function ViewCase() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [caseObject, setCaseObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/cases/byId/${id}`).then((response) => {
      setCaseObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const addComment = () => {
    if (newComment.trim() !== "") {
      axios
        .post("http://localhost:3001/comments", {
          Commentbody: newComment, // Updated to 'Commentbody' (camelCase)
          CaseId: id,
        })
        .then((response) => {
          console.log("Comment Added");
          setComments([...comments, response.data]); // Add the new comment to the existing comments
          setNewComment(""); // Clear the input field
        })
        .catch((error) => {
          console.error("Error adding comment:", error);
        });
    }
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };

  const deleteCase = (id) => {
    axios
      .delete(`http://localhost:3001/cases/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="casepage">
      <div className="caseleft">
        <div className="casee" id="individual">
          <div className="casecode">
            <strong>Case Code:</strong> {caseObject.CaseCode}
          </div>
          <div className="casetitle">
            <strong>Case Title:</strong> {caseObject.CaseTitle}
          </div>
          <div className="casedesc">
            <strong>Case Description: </strong>
            {caseObject.CaseFile}
          </div>
          <div className="caselawyer">
            <strong>Case Assigned Lawyer:</strong> {caseObject.CaseLawyer}
          </div>
          <div className="caseowner">
            <strong>Case Owner:</strong> {caseObject.CaseOwner}
          </div>
          <div className="footer">
            {caseObject.username}
            {authState.username === caseObject.username && (
              <button
                onClick={() => {
                  deleteCase(caseObject.id);
                }}
              >
                {" "}
                Delete Case
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="caseright">
        <div className="addcommentcontainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment} // Bind the input field value to 'newComment'
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listofcomments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.Commentbody}
                {/* <label> Username: {comment.username}</label> */}
                {authState.username === comment.username && (
                  <button
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    Delete Comment
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewCase;
