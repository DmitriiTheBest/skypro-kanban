import { useState } from "react";

// // импортируем HeaderStyled-component для Header и HeaderBlock для div Header__block 
// import { HeaderBlock, HeaderStyled } from "./Header.styled";

// другой  вариант импорта HeaderStyled-component для Header и HeaderBlock для div Header__block 
import * as S from "./Header.styled";  

// импортируем styled-component для Container
import { Container } from "../../styled/common/common.styled";

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
          <nav className="header__nav">
            {/* навешиваем обработчик события onClick для вызова функции addCard */}
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу{" "}
            </button>
            {/* навешиваем обработчик события onClick для открытия модального окна */}
            <div onClick={togglePopUp} class="header__user _hover02">
              Ivan Ivanov
            </div>
            {/* создать зависимость модального окна от переменной isOpened 
            Если isOpened = true, то открывается модальное окно
            если isOpened = false, то модальное окно закрывается */}
            {isOpened && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <!-- <a href="">x</a> --> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" class="checkbox" name="checkbox" />
                </div>
                <button type="button" class="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </S.HeaderBlock>
      </Container>
    </S.HeaderStyled>
  );
}
