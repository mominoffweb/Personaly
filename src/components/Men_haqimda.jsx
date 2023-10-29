import React from "react";
import Person from "./Person";
import Logo from "../images/Logo.svg";
import Icon from "../images/icon.png";
import Uzb from "../images/uzbek-icon.svg";
import Rus from "../images/Rus-icon.svg";
import English from "../images/English-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import alisher from "../images/alisher.jpg";
import texnomart from "../images/texnomart.png";
import Armani from "../images/armani.png";
import Alfred from "../images/alfred1.png";
import Jimmy from "../images/jimmy.png";
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

function Men_haqimda() {
  const [lang, setLang] = useState("Uzbek");
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="Head-section">
      <div className="header-link">
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
        <Link className="react-icons" to="/">
          <IoIosArrowBack className="icons" />
          <p className="react-p">Orqaga</p>
        </Link>
      </div>
      <div className="myself">
        <div className="I-alisher">
          <img src={alisher} alt="" />
          <div className="">
            <h1 className="zero-text1">
              16 yillik servis bo‘yicha mutaxassis <br /> - Alisher Rustamov
            </h1>
            <p className="zero-text2">
              Servis, savdo-sotiq va riteyl menejment sohasida <br /> Buyuk
              Britaniya, Yaqin Sharq va Janubiy Afrika <br />
              mintaqalarida Giorgio Armani, Jimmy Choo, Alfred <br /> Dunhill
              LTD kabi kompaniyalarda xalqaro tajribaga <br />
              ega.
            </p>
          </div>
        </div>
        <div className="info-text">
          <p className="info1">
            2005-yil ilk foliyatni oddiy sotuvchi rolida Armani Group do‘kon
            tarmoqlaridan boshlab, 2008-yil region miqyosidagi <br /> vitrinalar
            bo‘yicha mutaxassis lavozimigacha ko‘tarilishga omadim kulib boqdi.
            Ijodiy va tijoriy yondashuv birlashganda <br /> natija sari yo‘l
            olish osonlashadi. Brend ostidagi barcha do‘konlarning ichki va
            ustki ko‘rinishiga kompaniyaning standartlari <br /> asosida ishlov
            berib, shuningdek maxsulotlarni sotishni ham o‘rgatish mening
            zimmamga tushgandi. Ajoyib insonlarni <br /> uchratdim va halqaro
            tajribaga ega bo‘lishni boshladim.
          </p>
          <p className="info1">
            2010–2013 Bloomingdale's, AQSH-ning eng katta do‘konlar tarmog‘idan
            birida erkaklar kiyim-kechak bo‘limi <br /> boshqaruvchisi, keyin
            esa Jimmy Choo va Coach butik rahbari lavozimigacha hizmat qildim.
            Eng katta yutug‘imiz bu 25% <br /> doimiy mijoz vs 75% turist
            mijozlar koeffisiyentlarini 2 yil ichida 75% doimiy mijoz, 25%
            turist natijasiga olib chiqdik.
          </p>
          <p className="info1">
            2013–2018 Eng sarguzashtlarga boy davrim keldi, Richemont
            kompaniyasi riteyl operasiyalar bo‘yicha rahbar rolida ishga <br />{" "}
            taklif etdi. Bu kompaniya xashamatli maxsulotlar savdosida top
            beshtalikka kiradi. Uning tarkibida Alfred Dunhill LTD, <br />{" "}
            Cartier, Chloe, Piaget, IWC kabi brendlar mavjud. U davrlar
            kompaniya Yaqin Sharq, Afrika mintaqasida kengayish <br /> arafasida
            edi, yangi jamoa bilan oldinga qo‘yilgan maqsadlarni 4,5 yil ichida
            amalga oshirdik. Natijada sakkizta yangi savdo <br /> maydoni
            tashkil etildi.
          </p>
          <p className="info1">
            2018-Yil O‘zbekistonda iqtisodiy va ijtimoiy o‘zgarishlar jadal
            ko‘zga ko‘rina boshladi, aynan shuning uchun biznes- <br />
            konsalting hizmatlariga talab oshdi va bozorda bo‘shliqni to‘ldirish
            maqsadida yurtimizga qaytishga eng to‘g‘ri vaqtligi ayon <br />{" "}
            bo‘ldi. Birinchi ishlagan kompaniyalarimizdan biri bu texnomart*,
            ikkinchi mijozimiz, Respect Business, keyin Hayat Clinics, <br />{" "}
            Indenim, Mediapark. Bu kompaniyalar xamkor yoki mijoz emas, balki
            biz uchun bozorning muayyan yo‘nalishini egallashda <br /> o‘z
            hissasini qo‘shgan do‘stlarimizdir.
          </p>

          <h2 className="info2">
            Hozirgi davrda servis, savdo-sotiq va menejment bo‘yicha konsalting
            eng nufuzli kompaniyalar <br /> uchun olib borilyapti.
          </h2>
          <h1 className="work">Faoliyat olib borgan joylari:</h1>
          <div className="kompany">
            <div className="img-company">
              <img src={texnomart} alt="" />
            </div>
            <div className="img-company">
              <img src={Jimmy} alt="" />
            </div>
            <div className="img-company">
              <img src={Armani} alt="" />
            </div>
            <div className="img-company">
              <img src={Alfred} alt="" />
            </div>
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

export default Men_haqimda;
