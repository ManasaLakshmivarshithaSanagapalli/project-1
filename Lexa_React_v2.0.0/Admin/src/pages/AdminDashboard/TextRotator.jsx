import React, { useState, useEffect } from 'react';
const TextRotator = ({ texts, interval = 1000 }) => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);
  
      return () => {
        clearInterval(timer);
      };
    }, [texts, interval]);
  
    return <div>{texts[index]}</div>;
  };
export default TextRotator;