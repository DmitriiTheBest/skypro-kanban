// импортируем styled-component для Container
import { Container } from "../../styled/common/common.styled";
import {
  MainBlockStyled,
  MainContentStyled,
  MainStyled,
} from "./MainContent.Styled";

// import * as S from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <MainStyled>
      <Container>
        <MainBlockStyled>
          <MainContentStyled>{children}</MainContentStyled>
        </MainBlockStyled>
      </Container>
    </MainStyled>
  );
}

// done 
