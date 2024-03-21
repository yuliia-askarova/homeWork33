import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Materials from './components/Materials/Materials';
import Contacts from './components/Contacts/Contacts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/materials" element={<Materials/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes> */}

        <Home/>

      </div>
    </>
  );
}

export default App;
