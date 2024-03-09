// импортируем styled-component для Container
import { Container } from "../../styled/common/common.styled";
import { MainBlockStyled, MainContentStyled, MainStyled } from "./MainContent.Styled";

// import * as S from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <MainStyled>
      
    {/* заменяем тег 'div' c классом 'Container' на styled-component 'Container' из Common.styled.js  */}
      <Container>
        <MainBlockStyled>
          <MainContentStyled>
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
          </MainContentStyled>
        </MainBlockStyled>
      </Container>
    </MainStyled>
  );
}
