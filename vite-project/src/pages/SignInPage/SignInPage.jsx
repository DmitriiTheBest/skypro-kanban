// import { Link } from "react-router-dom";
// import { appRoutes } from "../../lib/appRoutes";

import "./SignIn.css";

export default function SignInPage({ login }) {
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

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                value={loginData.login}
                onChange={handleInputChange}
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                value={loginData.password}
                onChange={handleInputChange}
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <button
                onClick={login}
                className="modal__btn-enter _hover01"
                id="btnEnter"
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <a href="signup.html">Регистрируйтесь здесь</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
