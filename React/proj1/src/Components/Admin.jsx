import React, { useState } from "react";
import Clientreg2 from "./Clientreg2";

function Admin() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleClientRegister = () => {
    setShowRegisterForm(true);
  };

  const handleLawyerRegister = () => {
    // Implement the logic for lawyer registration here
  };

  return (
    <div>
      {showRegisterForm ? (
        <Clientreg2 />
      ) : (
        <>
          <button onClick={handleClientRegister}>Register Client</button>
          <button onClick={handleLawyerRegister}>Register Lawyer</button>
        </>
      )}
    </div>
  );
}

export default Admin;
