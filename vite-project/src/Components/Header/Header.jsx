import { useState } from "react";

import * as S from "./Header.styled";

import { Container } from "../../styled/common/common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Header({ addCard, toggleTheme, theme }) {
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    setIsOpened(!isOpened); // Функция открытия модального окна
  }
  let logoSrc;
  if (theme === "light") {
    logoSrc = "./images/logo.png";
  } else {
    logoSrc = "./images/logo_dark.png";
  }
  return (
    <S.HeaderStyled>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoStyled>
            <a href="" target="_self">
              <S.ImageStyled src={logoSrc} alt="logo" />
            </a>
          </S.HeaderLogoStyled>
          <S.HeaderNavStyled>
            <S.HeaderButtonMainNew onClick={addCard}>
              Создать новую задачу
            </S.HeaderButtonMainNew>
            {/* навешиваем обработчик события onClick для открытия модального окна */}
            <S.HeaderUserStyled onClick={togglePopUp}>
              Ivan Ivanov
            </S.HeaderUserStyled>
            
            {isOpened && (
              <S.HeaderPopUserSetStyled>
                <S.PopUserSetNameStyled>Ivan Ivanov</S.PopUserSetNameStyled>
                <S.PopUserSetMailStyled>
                  ivan.ivanov@gmail.com
                </S.PopUserSetMailStyled>
                <S.PopUserSetThemeStyled>
                  Темная тема
                  <input onClick={toggleTheme} type="checkbox" />
                </S.PopUserSetThemeStyled>
                <Link to={appRoutes.EXIT}>
                  <S.ExitButtonStyled>Выйти</S.ExitButtonStyled>
                </Link>
              </S.HeaderPopUserSetStyled>
            )}
          </S.HeaderNavStyled>
        </S.HeaderBlock>
      </Container>
    </S.HeaderStyled>
  );
}

// done 
