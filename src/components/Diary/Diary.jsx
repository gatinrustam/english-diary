import React, { useState, useEffect } from 'react';
import { DiaryMark } from '../DiaryMark/DiaryMark';
import './Diary.css';
import diary from './images/diary_dark.svg';
import update from './images/update_dark.svg';

export function Diary() {
  const KEY = '1eb0LeZU6tRhnTTxvOQ7fxboVcBQijbikTMeqsEepaq0';
  const LIST_PAGE = 1;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateData, setUpdateData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await fetch(`https://spreadsheets.google.com/feeds/list/${KEY}/${LIST_PAGE}/public/values?alt=json`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.feed.entry);
          setIsLoading(false);
        })
        .catch((e) => console.error(e));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);

  }, [updateData]);


  function onHandleClick() {
    setUpdateData(prev => !prev);
  }

  return (
    <div className="diary">

      <div className="diary-content">

        <div className="diary__header">
          <div className="diary__title">
            <img src={diary} alt="" />
            <h2>Дневник</h2>
          </div>
          <div className="diary__update">
            <img
              src={update}
              className={`diary__image ${isLoading ? 'active' : ''}`}
              onClick={onHandleClick}
              alt="" />
          </div>
        </div>

        {Array.isArray(data) && data.map(item => {
          return (
            <DiaryMark
              key={item.id.$t}
              id={item.id.$t}
              lastname={item.gsx$lastname.$t}
              name={item.gsx$name.$t}
              marks={item.gsx$marks.$t}
            />
          )
        })}
      </div>
    </div>
  )
}