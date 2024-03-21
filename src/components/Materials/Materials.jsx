import React from "react";
import Pic1 from "../../assets/5555.jpg";
import Pic2 from "../../assets/6666.jpg";
import Pic3 from "../../assets/7777.jpg";
import './Materials.css'

const info = [
  {
    link: "/",
    head: "ЩЕ ОДНА ОДЕСИТКА ПРЕТЕНДУЄ НА ПРИСВОЄННЯ ПОЧЕСНОГО ЗВАННЯ УКРАЇНИ «МАТИ-ГЕРОЇНЯ»",
    image: Pic1,
  },
  {
    link: "/",
    head: "У ОДЕСІ ВІДКРИЛАСЯ ВИСТАВКА ХУДОЖНИКА І СКУЛЬПТОРА ПАВЛА ШЕСТОПАЛОВА. ФОТО",
    image: Pic2,
  },
  {
    link: "/",
    head: "ЗА МИНУЛИЙ ТИЖДЕНЬ В ОДЕСІ НАРОДИЛИСЯ 92 МАЛЕНЬКИХ УКРАЇНЦІ",
    image: Pic3,
  },
];

const Materials = () => {
  return (
    <div className="materials-container">
      <h2>Останні новини з життя міста</h2>
      <ul className="materials-list">
        {info.map((item) => (
          <li className="section" key="first">
            {item.head}
            <img className="image-content" src={item.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materials;
