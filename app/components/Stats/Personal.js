import React, { useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);
  const tickLove = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const loveTime = new Date('2018-09-22T00:00:00');
    setData({
      ...data,
      love: {
        label: 'Time of have been with my lover',
        value: ((Date.now() - loveTime) / divisor).toFixed(11),
      },
    });
  };
  

  useEffect(() => {
    const timerLove = setInterval(() => tickLove(), 25);
    return () => { clearInterval(timerLove); };
  }, []);
 

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;
