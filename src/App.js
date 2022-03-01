import React, { useState } from 'react';
import Header from './component/Header';
import SearchBox from './component/SearchBox';
import BalanceCard from './component/BalanceCard';
import Footer from './component/Footer';
import Card from './component/Card';

import ExpenseData from './ExpenseData/ExpenseData';

const App = () => {
  const [data, setData] = useState(ExpenseData);

  return (
    <div>
      <Header />
      <SearchBox />
      <BalanceCard data={data} />
      <span className="entry">Showing {data.length} entry</span>
      {data.map((data, key) => (
        <div key={key}>
          <Card data={data} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default App;
