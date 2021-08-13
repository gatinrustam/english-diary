import React from 'react';
import './Menu.css';

export function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item active">О&nbsp;преподавателе</li>
        <li className="menu__item">Преимущества</li>
        <li className="menu__item">Программы</li>
        <li className="menu__item">Отзывы</li>
        <li className="menu__item">Ответы на&nbsp;вопросы</li>
        <li className="menu__item">Цены</li>
        <li className="menu__item">Контакты</li>
      </ul>
    </nav>
  )
}