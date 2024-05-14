import { useEffect, useState } from "react";
import { GlobalStyle, WrapperDiv } from "../../App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styled/common/themes";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import Column from "../../Components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";

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
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // создание переменной isLoading

  // Реализация эмуляции загрузки карточек для вывода текста «Данные загружаются».
  // создать состояние, которое будет отслеживать, идет ли в данный момент загрузка данных

  useEffect(() => {
    getTodos({ token: user.token })
      .then((cardList) => {
        setCards(cardList.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user]);

  // создаем новую переменную для логики добавления новой карточки
  const newCard = {
    _id: cards.length + 1,
    topic: "Web Design",
    title: "Название задачи",
    date: new Date(),
    status: "Без статуса",
  };

  // создать функцию логики добавления новой карточки
  function addCard() {
    setCards([...cards, newCard]); // добавляем новую карточку в массив cards
  }
  return (
    <>
      <GlobalStyle />
      <WrapperDiv>
        {/* pop-up start*/}
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          {/* Вызов компонентов и их импорт */}

          <Outlet />
          {/* pop-up end*/}
          <Header addCard={addCard} toggleTheme={toggleTheme} theme={theme} />
          {isLoading ? (
            "Loading..."
          ) : (
            <MainContent>
              {statusList.map((status) => {
                return (
                  <Column
                    title={status}
                    key={status}
                    cardList={cards.filter((card) => card.status === status)}
                  />
                );
              })}
            </MainContent>
          )}
        </ThemeProvider>
      </WrapperDiv>
    </>
  );
}

// done 
