import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import "./signup.css";
import { signUp } from "../../api";
import {
  ModalBlockStyled,
  ModalFormGroupStyled,
  ModalFormLoginStyled,
  ModalInputStyled,
  ModalStyled,
  ModalTitleStyled,
  WrapperDivStyled,
} from "../SignInPage/SignIn.styled";
import {
  ContainerSignupStyled,
  ModalButtonSignupStyled,
} from "./Signup.styled";

export default function SignUpPage({ logout }) {
  const [signupData, setSignupData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    await signUp(signupData)
      .then(() => {
        logout();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <WrapperDivStyled>
      <ContainerSignupStyled>
        <ModalStyled>
          <ModalBlockStyled>
            <ModalTitleStyled>
              <h2>Регистрация</h2>
            </ModalTitleStyled>
            <ModalFormLoginStyled action="#">
              <ModalInputStyled
                onChange={handleInputChange}
                value={signupData.name}
                className="modal__input first-name"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
              ></ModalInputStyled>
              <ModalInputStyled
                onChange={handleInputChange}
                value={signupData.login}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              ></ModalInputStyled>
              <ModalInputStyled
                onChange={handleInputChange}
                value={signupData.password}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              ></ModalInputStyled>
              <ModalButtonSignupStyled onClick={handleSignup}>
                Зарегистрироваться{" "}
              </ModalButtonSignupStyled>
              <ModalFormGroupStyled>
                <p>
                  Уже есть аккаунт?
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroupStyled>
            </ModalFormLoginStyled>
          </ModalBlockStyled>
        </ModalStyled>
      </ContainerSignupStyled>
    </WrapperDivStyled>
  );
}
