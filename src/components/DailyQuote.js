import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/diary/quote')
      .then(response => {
        setQuote(response.data);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  return;
};

export default DailyQuote;
