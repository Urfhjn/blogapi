import { Route, Routes } from "react-router-dom"
import { LandingPage, LoginPage, RegistrationPage } from "../component/Page"


export const SiteRoutes = props => {
   return (
      <Routes>
         <Route element={<LoginPage/>} path={'/'}></Route>
         <Route element={<RegistrationPage/>} path={'/register'}></Route>
         <Route element={<LandingPage/>} path={'/landing'}></Route>
      </Routes>
   )
}