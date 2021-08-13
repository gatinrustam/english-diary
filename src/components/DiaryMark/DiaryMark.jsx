import React from 'react';

export function DiaryMark({id, lastname, name, marks}) {
  const markArr = marks.split(',');

  const average = markArr.reduce((acc, item, _, { length }) => {
    return acc + item / length;
  }, 0);

  return (
    <div className="diary-row" key={id}>

      <div className="diary-row__name">
        <b>{lastname}</b><br/>
        <span>{name}</span>
      </div>

      <div className="diary-row__average">
        <span>{Math.ceil(average)}</span>
      </div>

      <div className="diary-row__marks">
        {markArr.map(mark => <span className="diary-row__mark">{mark}</span>)}
      </div>

    </div>
  )
}