import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import Icon from "../images/icon.png";
import Uzb from "../images/uzbek-icon.svg";
import Rus from "../images/Rus-icon.svg";
import English from "../images/English-icon.svg";
import Alisher from "../images/alisher-imges.png";
import bg_images from "../images/Rectangle.png";
import uzb from "../images/uzb.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const langList = [
  {
    name: "O'zbek",
    img: Uzb,
    id: "uzb",
  },
  {
    name: "Русский",
    img: Rus,
    id: "rus",
  },
  {
    name: "English",
    img: English,
    id: "eng",
  },
];
function Navbar() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("Uzbek");
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="Navbar">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="Link">
          <NavLink className="maqola" to={"ma"}>
            Maqolalar
          </NavLink>
          <p className="navbar-link">Ijtimoiy tarmoqlar</p>
        </div>
        <div className="navbar_dropdown">
          <div
            onClick={() => {
              setIsShow(!isShow);
            }}
            className="lang"
          >
            <div className="lang-button wrap">
              <p className="lang-button__title">{lang}</p>
              <img src={Icon} alt="" />
              <img
                className="lang-button__image"
                src="./images/icon.png"
                alt=""
              />
            </div>
            <ul
              className={`lang-list ${isShow && "show"}
              `}
            >
              {langList.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setLang(item.name);
                    }}
                    key={item.id}
                    className="lang-item wrap"
                  >
                    <img
                      className="lang-item__image"
                      src={item.img}
                      alt={item.name}
                    />
                    <p className="lang-item__title">{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <button className="navbar-btn">Xabar qoldirish</button>
        </div>
      </div>
      <div className="item">
        <div>
          <h1 className="texts">
            Alisher <br /> Rustamov
          </h1>
          <p className="head-text">
            Malevich Consulting asoschilardan <br /> biri va 16 yillik SERVIS
            bo‘yicha <br />
            mutaxassis
          </p>
          <NavLink to="I" className="header-btn">
            Men haqimda
          </NavLink>
        </div>
        <img className="Alisher" src={Alisher} alt="" />
        <img className="head-img" src={bg_images} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
