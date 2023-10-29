import React from "react";
import "./Footer.css";

function Footer() {
  return (
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
  );
}

export default Footer;
