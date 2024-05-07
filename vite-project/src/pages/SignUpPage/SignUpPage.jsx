import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signUp } from "../../api";

export default function SignUpPage() {
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
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                onChange={handleInputChange}
                value={signupData.name}
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                onChange={handleInputChange}
                value={signupData.login}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                onChange={handleInputChange}
                value={signupData.password}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button
                onClick={handleSignup}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                {/* <a href="../main.html">Зарегистрироваться</a>{" "} */}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
