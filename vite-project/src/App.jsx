// импорт маршруты
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signin from "./pages/SignInPage/SignInPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage"; 


// создать компонент App
export default function App() {
  // создать состояние для авторизации
  const [user, setUser] = useState(true);

  return (
    // обернули страницы в Routes
    // задали маршруты
    // данные страницы доступны без авторизации
    <Routes>
      <Route element={<PrivateRoute user={user}/>}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<Signin />} />
      <Route path={appRoutes.SIGNUP} element={<SignUp />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
