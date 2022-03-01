import React from 'react';

function BalanceCard({ data = [] }) {
  console.log(data);

  const totalCash = (val) => {
    const sum = data.reduce((accum, item) => {
      if (item.type === val) {
        accum = accum + item.amount;
      }
      return accum;
    }, 0);
    return sum;
  };

  return (
    <div className="balance">
      <div className="balance__total ">
        <span>Net Balance</span>
        <span>{totalCash(true) - totalCash(false)}</span>
      </div>
      <div className="balance__in ">
        <span>Total In (+)</span>
        <span className="cash__in">{totalCash(true)}</span>
      </div>
      <div className="balance__out ">
        <span>Total Out (-)</span>
        <span className="cash__out">{totalCash(false)}</span>
      </div>
    </div>
  );
}

export default BalanceCard;
