import React from 'react';

function Card({ data }) {
  console.log(data);
  return (
    <div className="card">
      <div className="card__header">
        <span>{data?.remark}</span>
        <span className={data.type ? 'cash__in' : 'cash__out'}>
          {data?.amount}
        </span>
      </div>
    </div>
  );
}

export default Card;
