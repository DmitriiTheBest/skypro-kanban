// импорт маршруты
import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import "./App.css";

// создать компонент App
export default function App() {
  const [user, setUser] = useState(null); // создать состояние для авторизации
  const navigate = useNavigate(); // создание переменной navigate с вызовом хука useNavigate

  // функция login будет принимать параметром нового юзера
  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.HOME); // вызов функции navigate для перенаправления юзера на главную страницу
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }

  return (
    // обернули страницы в Routes
    // задали маршруты
    // данные страницы доступны без авторизации
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.HOME} element={<HomePage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SignInPage login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignUpPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

// done
