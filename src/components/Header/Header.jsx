import React from 'react';
import { Menu } from '../Menu/Menu';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Школа английского с&nbsp;Люцией Галиуллиной</h1>
      <Menu />
    </header>
  )
}