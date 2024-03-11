// импортируем styled-components
import styled from "styled-components";

// 1. создаем styled-component для <main className="main">
export const MainStyled = styled.main`
  width: 100%;
  background-color: #eaeeef;
`;

// 2. Создаем styled-component для<div className="main__block">
export const MainBlockStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

// 3. Создаем styled-component для <div className="main__content">
export const MainContentStyled = styled.div`
  width: 100%;
  display: flex;
`;
