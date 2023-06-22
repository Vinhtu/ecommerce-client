import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ConvertVND(data) {
  const { language } = useSelector((state) => state.utils);

  console.log(language, 'language');
  const [money, setMoney] = React.useState(0);
  useEffect(() => {
    if (language === 'en') {
      setMoney(
        '$' +
          (parseInt(data) / 24000)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
      );
    } else {
      setMoney(
        parseInt(data).toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        }),
      );
    }
  }, [language]);

  return <>{money}</>;
}

export default ConvertVND;
