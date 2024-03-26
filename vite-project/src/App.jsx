// импорт маршруты 
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// создать компонент App
export default function App() {
  return (
    // обернули страницы в Routes
    <Routes>
      <Route path={appRoutes.SIGNIN} element={<SignIn />} />
      <Route path={appRoutes.SIGNUP} element={<SignUp />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}
