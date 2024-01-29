export default function MainContent({ children }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* Скопировали содержимое "main__column column" в отдельный компонент
                Здесь вызываем компонент через Props  */}
            {/* <Column title={"Without a status"} />
            <Column title={"Need to do"} />
            <Column title={"In working"} />
            <Column title={"Testing"} />
            <Column title={"Ready"} /> */}

            {/* Заменяем все строки Column на prop children,  
                Строки Column копируем и передаем в App.jsx в тег MainContent*/}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
