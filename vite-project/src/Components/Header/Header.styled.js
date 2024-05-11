import styled from "styled-components"; // импортируем styled-components
import { hover03 } from "../../styled/common/common.styled";

export const HeaderStyled = styled.header` // создаем styled-component для Header
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div` // создаем styled-component для Header block
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

// создаем styled-component для <nav className="header__nav">
export const HeaderNavStyled = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
`;

export const HeaderUserStyled = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
`;

export const HeaderPopUserSetStyled = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  &:target {
    display: block;
  }
`;

export const PopUserSetNameStyled = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMailStyled = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetThemeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  color: ${(props) => props.theme.text};

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type="checkbox"]::before {
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
  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const ExitButtonStyled = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${props => props.theme.textHeaderUser};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.textHeaderUser};
  cursor: pointer;
  outline: none;

  ${hover03}
`;

export const HeaderLogoStyled = styled.div`
  width: 85px;
`;

export const ImageStyled = styled.img`
  width: 85px;
`;

// создаем styled-component для <button type="button" className="_hover03">
// export const HeaderPopUserSetButtonStyled = styled.button`
//   cursor: pointer;
//   outline: none;
//   &:hover {
//     background-color: #33399b;
//     color: #ffffff;
//   }
// `;

// export const HeaderPopUserSetLinkStyled = styled.button`
//   width: 72px;
//   height: 30px;
//   background-color: #565eef;
//   color: #ffffff;
//   border-radius: 4px;
//   border: 1px solid #565eef;
// `;
