import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Diary } from './components/Diary/Diary';
import { Content } from './components/Content/Content';

function App() {
  const [showDiary, setShowDiary] = useState(false);

  const handleClick = () => {
    setShowDiary(prev => !prev);
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Diary active={showDiary} handle={handleClick} />

      <div
        className="diary-button"
        onClick={handleClick}>
        <button>
          Онлайн-дневник
        </button>
      </div>
    </div>
  );
}

export default App;
