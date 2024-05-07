import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { PopExitButtonNo, PopExitButtonYes } from "./PopExit.styled";

export default function PopExit({ logout }) {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              {/* <Link to={appRoutes.SIGNIN}> */}
              <PopExitButtonYes onClick={logout}>Да, выйти</PopExitButtonYes>
              {/* </Link> */}
              <Link to={appRoutes.HOME}>
                <PopExitButtonNo>Нет, остаться</PopExitButtonNo>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
