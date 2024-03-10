// создать styled-component для Header

// импортируем styled-components
import styled from "styled-components";

// создаем styled-component для Header
export const HeaderStyled = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

// создаем styled-component для Header block
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

// // 5. создаем styled-component для <div className="header__logo _show _light">
// export const HeaderLogoLightStyled = styled.div`
//   display: none;
// `;

// // 6. создаем styled-component для <div className="header__logo _dark">
// export const HeaderLogoDarkStyled = styled.div`
//   display: none;
// `;

// 7. создаем styled-component для <nav className="header__nav">
export const HeaderNavStyled = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// // создаем styled-component для <div className="header__pop-user-set pop-user-set">
// // внутри <nav className="header__nav">
// export const HeaderPopUserSetStyled = styled.div`
// display: block;
// position: absolute;
// top: 61px;
// right: 0;
// width: 213px;
// height: 205px;
// border-radius: 10px;
// border: 0.7px solid rgba(148, 166, 190, 0.4);
// background: #fff;
// box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
// padding: 34px;
// text-align: center;
// z-index: 2;
// &:target {
//   display: block;
// }
// `;

// создаем styled-component для <p className="pop-user-set__name">
// внутри <div className="header__pop-user-set pop-user-set">
export const PopUserSetNameStyled = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

// создаем styled-component для <p className="pop-user-set__mail">
// внутри <div className="header__pop-user-set pop-user-set">
export const PopUserSetMailStyled = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

// // // создаем styled-component для <div className="pop-user-set__theme">
// // // внутри <div className="header__pop-user-set pop-user-set">
export const PopUserSetThemeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

// // создаем styled-component для <p className="pop-user-set__theme-text">
export const PopUserSetThemeTextStyled = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

// создаем styled-component для .pop-user-set__theme input[type=checkbox]::before
export const PopUserSetThemeInputStyled = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  appearance: none;
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }
  &::before {
    box-sizing: border-box;
  }
`;

// // 8. создаем styled-component для <button className="header__btn-main-new _hover01">

// export const HeaderBtnMainNewStyled = styled.button`
//   width: 178px;
//   height: 30px;
//   border-radius: 4px;
//   background-color: #565eef;
//   color: #ffffff;
//   border: none;
//   font-size: 14px;
//   line-height: 1;
//   font-weight: 500;
//   margin-right: 20px;
//   a {
//     color: #ffffff;
//   }
//   &:hover
// `;

// // Создаем styled-component для <button onClick={addCard} className="header__btn-main-new _hover01"

// // 9. создаем styled-component для <div className="header__user _hover02">
// export const HeaderUserStyled = styled.div``;
