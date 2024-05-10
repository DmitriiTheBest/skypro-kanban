// импорт стилей
import styled from "styled-components";
import { css } from "styled-components";

// создание styled-component для Container
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const H2 = styled.h2`
  
`;

export const hover01 = css`
&:hover {
  background-color: #33399b;
}
`;

export const hover02 = css`
&:hover {
  color: #33399b;
}
`;

export const hover03 = css`
&:hover {
    color: #FFFFFF;
    background-color: #33399b
}
`;


// done 
