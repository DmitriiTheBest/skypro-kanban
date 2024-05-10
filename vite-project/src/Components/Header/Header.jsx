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
  if (theme === 'light') {
    logoSrc = "./images/logo.png";
  } else {
    logoSrc = "./images/logo_dark.png";
  }
  return (
    <S.HeaderStyled>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNavStyled>
            <S.HeaderButtonMainNew onClick={addCard}>
              Создать новую задачу
            </S.HeaderButtonMainNew>
            {/* навешиваем обработчик события onClick для открытия модального окна */}
            <S.HeaderUserStyled onClick={togglePopUp}>
              Ivan Ivanov
            </S.HeaderUserStyled>
            {/* создать зависимость модального окна от переменной isOpened 
            Если isOpened = true, то открывается модальное окно
            если isOpened = false, то модальное окно закрывается */}
            {isOpened && (
              <S.HeaderPopUserSetStyled>
                {/* <!-- <a href="">x</a> --> */}
                <S.PopUserSetNameStyled>Ivan Ivanov</S.PopUserSetNameStyled>
                <S.PopUserSetMailStyled>
                  ivan.ivanov@gmail.com
                </S.PopUserSetMailStyled>
                <S.PopUserSetThemeStyled>
                  Темная тема
                  <input onClick={toggleTheme} type="checkbox" />
                </S.PopUserSetThemeStyled>
                <Link to={appRoutes.EXIT}>
                  <S.HeaderPopUserSetButtonStyled>
                    <S.HeaderPopUserSetLinkStyled>
                      Выйти
                    </S.HeaderPopUserSetLinkStyled>
                  </S.HeaderPopUserSetButtonStyled>
                </Link>
              </S.HeaderPopUserSetStyled>
            )}
          </S.HeaderNavStyled>
        </S.HeaderBlock>
      </Container>
    </S.HeaderStyled>
  );
}
