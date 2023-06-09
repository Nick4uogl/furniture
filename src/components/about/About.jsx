import React from "react";
import "./About.scss";
import mapAbout from "../../img/map.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-page__container">
        <img src={mapAbout} alt="our location" />
        <p>
          Ласкаво просимо до нашого магазину меблів у селі Берестяне! У нас Ви
          знайдете великий вибір меблів, виготовлених із високоякісних деревин -
          дубу, сосни, ясена та вільхи. Наші меблі відрізняються надзвичайною
          міцністю та довговічністю, оскільки ми використовуємо тільки найкращі
          матеріали. Крім того, ми пропонуємо меблі в різних стилях - від
          класичного до сучасного, щоб кожен міг знайти щось, що підійде саме
          йому. Наші фахівці допоможуть Вам вибрати меблі, які відповідають
          Вашим потребам та бюджету, та відповідатимуть на всі Ваші питання. Ми
          прагнемо зробити Ваш досвід покупки меблів якомога приємнішим та
          зручнішим. Запрошуємо Вас завітати до нашого магазину та ознайомитися
          з нашими меблями від перших особистих вражень. Ми впевнені, що Ви
          знайдете щось, що Вам сподобається та стане окрасою Вашого дому!
        </p>
      </div>
    </div>
  );
}

export default About;
