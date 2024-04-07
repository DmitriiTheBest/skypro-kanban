import { useState } from "react";

// // импортируем HeaderStyled-component для Header и HeaderBlock для div Header__block
// import { HeaderBlock, HeaderStyled } from "./Header.styled";

// другой  вариант импорта HeaderStyled-component для Header и HeaderBlock для div Header__block
import * as S from "./Header.styled";

// импортируем styled-component для Container
import { Container } from "../../styled/common/common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    // Функция открытия модального окна
    setIsOpened(!isOpened);
  }
  return (
    // заменить тег 'header' на 'HeaderStyled'
    <S.HeaderStyled>
      {/* заменить тег 'div' c классом 'Container' на styled-component 'Container'  */}
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
            {/* навешиваем обработчик события onClick для вызова функции addCard */}
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу{" "}
            </button>
            {/* навешиваем обработчик события onClick для открытия модального окна */}
            <div onClick={togglePopUp} className="header__user _hover02">
              Ivan Ivanov
            </div>
            {/* создать зависимость модального окна от переменной isOpened 
            Если isOpened = true, то открывается модальное окно
            если isOpened = false, то модальное окно закрывается */}
            {isOpened && (
              <S.HeaderPopUserSetStyled>
                {/* <!-- <a href="">x</a> --> */}
                <S.PopUserSetNameStyled>Ivan Ivanov</S.PopUserSetNameStyled> 
                <S.PopUserSetMailStyled>ivan.ivanov@gmail.com</S.PopUserSetMailStyled >
                <S.PopUserSetThemeStyled>
                  <S.PopUserSetThemeTextStyled>Темная тема</S.PopUserSetThemeTextStyled>
                  <S.PopUserSetThemeInputStyled />
                </S.PopUserSetThemeStyled>
                <Link to={appRoutes.EXIT}>
                <S.HeaderPopUserSetButtonStyled>
                  <S.HeaderPopUserSetLinkStyled>Выйти</S.HeaderPopUserSetLinkStyled>
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
