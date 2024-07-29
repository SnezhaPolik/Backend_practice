import './style.css';

const questions = [
  {
    title: 'JavaScript- это ... ?',
    variants: ['язык программирования', 'учебник', 'приложение'],
    correct: 0,
  },
  {
    title: 'Backend-разработчик - это человек, который создает ... ',
    variants: ['дизайн', 'серверную часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Тебе понравилась профессия backend-разработчик?',
    variants: [
      'Да',
      'Нет',
      'Не знаю, не уверен(а)',
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://www.flaticon.com/free-icon/paw_8277564" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это когда на ты никому не нужен</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;