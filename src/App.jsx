import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "./auth/SignIn/SignIn";
import SignUp from "./auth/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <SignIn/>
      <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/sign-in/" element={<SignIn/>}/>
        </Routes>
    </div>
  );
}

export default App;
