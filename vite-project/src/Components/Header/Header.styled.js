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
