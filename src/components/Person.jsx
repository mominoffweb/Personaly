import React from "react";
import Logo from "../images/Logo.svg";
import Icon from "../images/icon.png";
import Uzb from "../images/uzbek-icon.svg";
import Rus from "../images/Rus-icon.svg";
import English from "../images/English-icon.svg";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import section1 from "../images/section-img1.png";
import section2 from "../images/section-img2.png";
import section3 from "../images/section-img3.png";
import section4 from "../images/section-img4.png";
import section5 from "../images/section-img5.png";
import section6 from "../images/section-img6.png";
import { Link } from "react-router-dom";
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
function Person() {
  const [lang, setLang] = useState("Uzbek");
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="person">
      <div className="link-person">
        <div className="container">
          <img src={Logo} alt="" />
          <p className="person-text"> Maqolalar</p>
          <div className="Link">
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

        <div>
          <Link className="react-icons" to="/">
            <IoIosArrowBack className="icons" />
            <p className="react-p">Orqaga</p>
          </Link>
          <h1 className="react-h1">Maqolalar</h1>
        </div>
        <div className="main-section">
          <div className="">
            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>

            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>
            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>
            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>
            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>
            <div className="section-text">
              <h2>
                Xayotda shunday vaziyatlar bo‘ladiki, kimdan <br /> yordam
                so‘ramang…
              </h2>
              <p className="section-p">
                Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha{" "}
                <br />
                o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br />{" "}
                qilish kerak emas ekan…
              </p>
              <p className="section-data">13.08.2022</p>
            </div>
          </div>

          <div className="section-img">
            <img src={section1} alt="" />
            <img src={section2} alt="" />
            <img src={section3} alt="" />
            <img src={section4} alt="" />
            <img src={section5} alt="" />
            <img src={section6} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info">
          <h1 className="footer-text">
            Alisher <br /> Rustamov
          </h1>
          <p className="footer-texts">
            Malevich Consulting asoschilardan <br /> biri va 16 yillik SERVIS
            bo‘yicha <br />
            mutaxassis
          </p>
        </div>
        <div className="footer-item">
          <h1 className="item1">Xabar qoldirish</h1>
          <p className="item2">
            Alisher Rustamovga o‘z fikrlaringiz, <br />
            munosabatlaringizni bildirish imkoniyatingiz bor!
          </p>
          <form className="form">
            <label>
              <input
                className="input"
                type="email"
                placeholder="Xabar qoldirish"
              />
            </label>
            <button className="footer-btn">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Person;
