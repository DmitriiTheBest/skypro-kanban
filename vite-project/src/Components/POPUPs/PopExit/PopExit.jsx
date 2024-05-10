import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import {
  PopExitBlock,
  PopExitButtonNo,
  PopExitButtonYes,
  PopExitContainer,
  PopExitForm,
  PopExitFormGroup,
  PopExitStyled,
  PopExitTitle,
} from "./PopExit.styled";
import { H2 } from "../../../styled/common/common.styled";

export default function PopExit({ logout }) {
  return (
    <PopExitStyled>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            {/* <h2>Выйти из аккаунта?</h2> */}
            <H2>Выйти из аккаунта?</H2>
          </PopExitTitle>
          <PopExitForm>
            <PopExitFormGroup>
              <Link to={appRoutes.SIGNIN}>
                <PopExitButtonYes onClick={logout}>Да, выйти</PopExitButtonYes>
              </Link>
              <Link to={appRoutes.HOME}>
                <PopExitButtonNo>Нет, остаться</PopExitButtonNo>
              </Link>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
}
