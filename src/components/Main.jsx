import React from "react";
import "./Main.css";
import img1 from "../images/Main_img1.png";
import img2 from "../images/Main_img2.png";
import img3 from "../images/Main_img3.png";
import { BsTelegram } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import section1 from "../images/section-img1.png";
import section2 from "../images/section-img2.png";
import section3 from "../images/section-img3.png";
import section4 from "../images/section-img4.png";

function Main() {
  return (
    <div className="Main">
      <div className="container">
        <div className="images">
          <div className="images_1">
            <img className="img1" src={img1} alt="" />
            <h1 className="main_text">Motivasiya bergim keladi ayrim payt</h1>
            <p className="main_p">
              Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi,
              negadir. Hikoya so‘zlash ham bir san’at ekan.
            </p>
            <p className="data-main">13.08.2022</p>
          </div>

          <div className="images_1">
            <img src={img2} alt="" />
            <h1 className="main_text">Motivasiya bergim keladi ayrim payt</h1>
            <p className="main_p">
              Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi,
              negadir. Hikoya so‘zlash ham bir san’at ekan.
            </p>
            <p className="data-main">13.08.2022</p>
          </div>

          <div className="images_3">
            <img src={img3} alt="" />
            <h1 className="main_text">Motivasiya bergim keladi ayrim payt</h1>
            <p className="main_p">
              Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi,
              negadir. Hikoya so‘zlash ham bir san’at ekan.
            </p>
            <p className="data-main">13.08.2022</p>
          </div>
          <div className="">
            <div className="main-texts">
              <h1 className="text1">Mashhur maqolalar</h1>
              <div className="items">
                <a className="mini-text" href="#">
                  Boy-otaning xayotidan...
                </a>
                <p className="main-data">13.08.2022</p>
              </div>
            </div>
            <div className="zero"></div>
            <div className="main-texts">
              <div className="items">
                <a className="mini-text" href="#">
                  Hech kim velosiped minib tug‘ilmagan.
                </a>
                <p className="main-data">13.08.2022</p>
              </div>
            </div>
            <div className="zero"></div>
            <div className="main-texts">
              <div className="items">
                <a className="mini-text" href="#">
                  Talabalik davrida ishlash yomonmi? 13.08.2022
                </a>
                <p className="main-data">13.08.2022</p>
              </div>
            </div>
            <div className="zero"></div>
            <div className="main-texts">
              <div className="items">
                <a className="mini-text" href="#">
                  Sizda qaysi kuchli resursingiz bor?react-router-dom@
                </a>
                <p className="main-data">13.08.2022</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="youtobe_text">
        <iframe
          className="you_tobe"
          width="1000"
          height="473"
          src="https://www.youtube.com/embed/JTkwjLsVs3o?si=mmajVSJRp6RODbkR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <h2 className="main-link">Ijtimoiy tarmoqlar</h2>
          <div className="personal-network">
            <div className="links">
              <BiLogoFacebookCircle className="network-link " />
              <a className="network" href="">
                Facebook
              </a>
            </div>
            <div className="links">
              <BsTelegram className="network-link " />
              <a className="network" href="">
                Telegram
              </a>
            </div>
            <div className="links">
              <BiLogoInstagramAlt className="network-link " />
              <a className="network" href="">
                Instagram
              </a>
            </div>

            <div className="links">
              <AiFillYoutube className="network-link " />
              <a className="network" href="">
                Youtube
              </a>
            </div>
          </div>
        </div>
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
        </div>

        <div className="section-img">
          <img src={section1} alt="" />
          <img src={section2} alt="" />
          <img src={section3} alt="" />
          <img src={section4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
