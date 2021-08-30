import React from 'react';
import './Menu.css';

export function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item active">
          <a href="#">О&nbsp;преподавателе</a>
        </li>
        <li className="menu__item">
          <a href="#">Преимущества</a>
        </li>
        <li className="menu__item">
          <a href="#">Программы</a>
        </li>
        <li className="menu__item">
          <a href="#">Отзывы</a>
        </li>
        <li className="menu__item">
          <a href="#">Ответы на&nbsp;вопросы</a>
        </li>
        <li className="menu__item">
          <a href="#">Цены</a>
        </li>
        <li className="menu__item">
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  )
}