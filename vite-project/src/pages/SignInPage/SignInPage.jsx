import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { signIn } from "../../api";
import "./SignIn.css";
import { useState } from "react"; // импортируем useState
import * as S from "./SignIn.styled";

export default function SignIn({ login }) {
  // получим в данной функции функцию login из пропсов
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  // создание функции handleLogin
  // для вызова функции для обращения к API
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(loginData);
    await signIn(loginData)
      .then((data) => {
        login(data.user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <S.WrapperDivStyled>
      <S.ContainerSigninStyled>
        <S.ModalStyled>
          <S.ModalBlockStyled>
            <S.ModalTitleStyled>
              <h2>Вход</h2>
            </S.ModalTitleStyled>
            <S.ModalFormLoginStyled action="#">
              <S.ModalInputStyled
                value={loginData.login}
                onChange={handleInputChange}
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              ></S.ModalInputStyled>

              <S.ModalInputStyled
                value={loginData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></S.ModalInputStyled>
              <S.ModalButtonEnterStyled onClick={handleLogin}>
                Войти
              </S.ModalButtonEnterStyled>
              <S.ModalFormGroupStyled>
                <p>Нужно зарегистрироваться?</p>
                <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroupStyled>
            </S.ModalFormLoginStyled>
          </S.ModalBlockStyled>
        </S.ModalStyled>
      </S.ContainerSigninStyled>
    </S.WrapperDivStyled>
  );
}
