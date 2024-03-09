// импортируем styled-component
import styled from "styled-components";

// 1. Создаем компонент для <div className="main__column column">
export const MainColumnStyled = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

// 2. Создаем компонент для <div className="column__title">
export const ColumnTitleStyled = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

// 3. Создаем компонент для <div className="cards">
export const CardsStyled = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

// 4. Создаем компонент для p (параграф) внутри <div className="column__title">
export const ColumnTitleTextStyled = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;
