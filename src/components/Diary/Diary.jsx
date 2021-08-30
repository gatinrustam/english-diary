import React, { useState, useEffect } from 'react';
import { DiaryMark } from '../DiaryMark/DiaryMark';
import './Diary.css';
import diary from './images/diary_dark.svg';
import update from './images/update_dark.svg';

export function Diary({ active, handle }) {
  // const API_KEY = 'AIzaSyB6Hphy24o-WkJGE8jIhxB_yVinM-CLSQo';
  const DOC_ID = '1eb0LeZU6tRhnTTxvOQ7fxboVcBQijbikTMeqsEepaq0';
  // const TAB_NAME = '1';
  // const URL = `https://sheets.googleapis.com/v4/spreadsheets/${DOC_ID}/values/${TAB_NAME}?alt=json&key=${API_KEY}`;
  const URL = `https://docs.google.com/spreadsheets/d/${DOC_ID}/gviz/tq?tqx=out:json&tq&gid=0`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateData, setUpdateData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);


      await fetch(URL)
        .then((res) => res.text())
        .then((res) => {
          const data = res.substring(47).slice(0, -2);
          setData(data);
          console.log(data);
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
    <div className={`diary-wrap diary-wrap__${active ? 'show' : 'hide'}`}>
      <div
        className="diary__overlay"
        onClick={handle}
      ></div>
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
    </div>
  )
}