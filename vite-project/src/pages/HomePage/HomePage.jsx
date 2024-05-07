import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import Column from "../../Components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styled/common/themes";

// для отрисовки колонки с карточками создаем список статусов
// const statusList = [
//   "Without a status",
//   "Need to do",
//   "In working",
//   "Testing",
//   "Ready",
// ];

const statusList = [
  "Без статуса",
  "Необходимо сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

// Выполните логику, чтобы при нажатии на кнопку
// Создать новую задачу добавлялась новая задача в столбец Без статуса (внутри фигурных скобок после App)
export default function HomePage({ user }) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [cards, setCards] = useState([]);
  // создание переменной isLoading
  const [isLoading, setIsLoading] = useState(true);

  // Реализация эмуляции загрузки карточек для вывода текста «Данные загружаются».
  // создать состояние, которое будет отслеживать, идет ли в данный момент загрузка данных

  useEffect(() => {
    getTodos({ token: user.token }).then((cardList) => {
      console.log(cardList);
      setCards(cardList.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert(error);
    })
  }, [user]);

  // создать функцию логики добавления новой карточки
  function addCard() {
    // создаем новую переменную для логики добавления новой карточки
    const newCard = {
      id: cards.length + 1,
      topic: "Web design",
      title: "New task",
      date: "30.10.2023",
      status: "Without a status",
    };
    // добавляем новую карточку в массив cards
    setCards([...cards, newCard]);
  }
  return (
    <>
      <div className="wrapper">

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {/* Вызов компонентов и их импорт */}

        <Outlet />

        {/* передаем пропсом в компонент Header функцию addCard */}
        <Header addCard={addCard} toggleTheme={toggleTheme} theme={theme} />

        {isLoading ? (
          "Loading..."
        ) : (
          <MainContent>
            {/* отрисовка списков со статусами при помощи метода map так как это массив 
          Передаем в него статусы из массива statusList 
          Метод map принимает как аргумент callback функцию 
          первый параметр функции - элемент status 
          Элемент Status принимает в качестве пропсов title и key */}
            {statusList.map((status) => {
              return (
                <Column
                  title={status}
                  key={status}
                  // Состояние применяем к колонке, чтобы при изменении этого состояния происходила перерисовка разметки
                  // разметка перерисовывается в двух случаях - при изменении пропсов или при изменении состояния
                  cardList={cards.filter((card) => card.status === status)}
                />
              );
            })}
          </MainContent>
        )}
      </ThemeProvider>
      </div>
    </>
  );
}
