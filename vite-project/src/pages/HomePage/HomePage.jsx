import { useEffect, useState } from "react";
import PopExit from "../../Components/POPUPs/PopExit/PopExit";
import PopNewCard from "../../Components/POPUPs/PopNewCard/PopNewCard";
import PopBrowse from "../../Components/POPUPs/PopBrowse/PopBrowse";
import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";
import Column from "../../Components/Column/Column";
import { cardList } from "../../data";


// для отрисовки колонки с карточками создаем список статусов
const statusList = [
  "Without a status",
  "Need to do",
  "In working",
  "Testing",
  "Ready",
]; 

// Выполните логику, чтобы при нажатии на кнопку
// Создать новую задачу добавлялась новая задача в столбец Без статуса (внутри фигурных скобок после App)
export default function HomePage() {
  const [cards, setCards] = useState(cardList);
  // создание переменной isLoading
  const [isLoading, setIsLoading] = useState(true);

  // Реализация эмуляции загрузки карточек для вывода текста «Данные загружаются».
  // создать состояние, которое будет отслеживать, идет ли в данный момент загрузка данных
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

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
        {/* Вызов компонентов и их импорт */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        {/* передаем пропсом в компонент Header функцию addCard */}
        <Header addCard={addCard} />

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
      </div>
    </>
  );
}