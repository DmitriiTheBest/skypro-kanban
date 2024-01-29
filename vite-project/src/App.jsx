import "./App.css";
import Column from "./Components/Column/Column";
import Header from "./Components/Header/Header";

import MainContent from "./Components/MainContent/MainContent";
import PopBrowse from "./Components/POPUPs/PopBrowse/PopBrowse";
import PopExit from "./Components/POPUPs/PopExit/PopExit";
import PopNewCard from "./Components/POPUPs/PopNewCard/PopNewCard";

export default function App() {
  return (
    <>
      <div className="wrapper">
        {/* Вызов компонентов и их импорт */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header />

        {/* Сделали тег MainContent парным и передали в него Column из MainContent.jsx 
        Всё, что находится между открывающим и закрывающим тегом - это Children */}
        <MainContent>
          <Column title={"Without a status"} />
          <Column title={"Need to do"} />
          <Column title={"In working"} />
          <Column title={"Testing"} />
          <Column title={"Ready"} />
        </MainContent>
      </div>
    </>
  );
}
