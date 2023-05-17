
import './App.css';
import React, { useState } from "react";
import {Transfer} from './Transfer'
import { Navbar } from './Navbar';
import { Heading } from './Heading';
import { Login } from './Login';
import { Register } from './Register';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div>
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Transfer />
    </div>
  );
}

export default App;
