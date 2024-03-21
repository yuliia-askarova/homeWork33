import React from "react";
import { Link } from 'react-router-dom';
// const config = [
//   { link: "/", text: "Головна" },
//   { link: "/", text: "Питання" },
//   { link: "/", text: "Матерали" },
//   { link: "/", text: "Контакти" },
// ];

const MenuItem = () => {
  return (
    // <nav className="menuItem">
    //   <ul>
    //     {config.map((item) => (
    //       <li key ={item.text} className="btn">
    //         <a href={item.link}>{item.text}</a>
    //       </li>
    //     ))}

    //   </ul>
    // </nav>

    <nav className="menuItem">
      <ul>
        <li className="btn">
          <Link to="/">Головна</Link>
        </li>
        <li className="btn">
          <Link to="/questions">Питання</Link>
        </li>
        <li className="btn">
          <Link to="/materials">Матеріали</Link>
        </li>
        <li className="btn">
          <Link to="/contacts">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItem;
