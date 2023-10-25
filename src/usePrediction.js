import { useState, useEffect, useRef } from 'react';

function usePrediction(initialPreds) {
  const [preds, setPreds] = useState(initialPreds);
  const [prediction, setPrediction] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  
  const clickCountRef = useRef(0); 

  const randomPrediction = () => {
    const randomIndex = Math.floor(Math.random() * preds.length);
    setPrediction(preds[randomIndex]);
    setButtonClicked(true);
    
    clickCountRef.current += 1;
    console.log('Количество кликов:', clickCountRef.current); 
  };

  useEffect(() => {
    if (buttonClicked) {
      document.title = `Предсказание на день: ${prediction}`;
    }
  }, [buttonClicked, prediction]);

  return {
    prediction,
    buttonClicked,
    randomPrediction
  };
}

export default usePrediction;