import React from 'react';
import { Menu } from '../Menu/Menu';

import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Клуб изучения английского языка Люции Галиуллиной</h1>
      <Menu />
    </header>
  )
}