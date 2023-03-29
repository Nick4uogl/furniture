import React from "react";
import "./Advantages.scss";
import advantagesImg from "../../img/advantagesImg.jpg";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__container">
        <div className="advantages__img">
          <img src={advantagesImg} alt="Team" />
        </div>
        <div className="advantages__right">
          <h2 className="advantages__title">Чому варто обрати саме нас ?</h2>
          <ul className="advantages__list">
            <li className="advantages__item">
              Більше 30-ти років у сфері виробництва меблів.
            </li>
            <li className="advantages__item">
              Більше 25 000 задоволених клієнтів.
            </li>
            <li className="advantages__item">
              В разі виявлення вами браку ми відшкодовуємо збитки або ж робимо
              новий товар.
            </li>
            <li className="advantages__item">
              Робимо все відповідно ваших вимог та креслень.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
