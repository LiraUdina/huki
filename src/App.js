import React, { useState, useEffect } from 'react';

function Prediction() {
  const preds = [
    'Ваши усилия и труд принесут желаемый результат.',
    'Остерегайтесь неприятных сюрпризов.',
    'Сфокусируйтесь на своих целях и достигнете успеха.',
    'Сегодня хороший день для творческих начинаний.',
    'Сегодня будет отличный день, полный позитивных событий!'
  ];

  const [pred, setPrediction] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const RandomPrediction = () => {
    const randomIndex = Math.floor(Math.random() * preds.length);
    setPrediction(preds[randomIndex]);
    setButtonClicked(true);
  };

  useEffect(() => {
    if (buttonClicked) {
      document.title = `Предсказание на день: ${pred}`;
    }
  }, [buttonClicked, pred]);

  return (
    <div>
      <h1>Предсказание на день</h1>
      {buttonClicked ? (
        <div>
          <p>Ваше предсказание на сегодня:</p>
          <p>{pred}</p>
        </div>
      ) : (
        <button onClick={RandomPrediction}>Получить предсказание</button>
      )}
    </div>
  );
}

export default Prediction;
