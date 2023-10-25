import React from 'react';
import usePrediction from './usePrediction';

function Prediction() {
  const initialPreds = [
    'Ваши усилия и труд принесут желаемый результат.',
    'Остерегайтесь неприятных сюрпризов.',
    'Сфокусируйтесь на своих целях и достигнете успеха.',
    'Сегодня хороший день для творческих начинаний.',
    'Сегодня будет отличный день, полный позитивных событий!'
  ];

  const { prediction, buttonClicked, randomPrediction, clickCount } = usePrediction(initialPreds);

  return (
    <div>
      <h1>Предсказание на день</h1>
      {buttonClicked ? (
        <div>
          <p>Ваше предсказание на сегодня:</p>
          <p>{prediction}</p>
        </div>
      ) : (
        <button onClick={randomPrediction}>Получить предсказание</button>
      )}
      </div>
  );
}

export default Prediction;