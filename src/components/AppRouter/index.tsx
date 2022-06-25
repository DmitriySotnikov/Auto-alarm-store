import React, {FC} from "react"
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes";
import {App} from "../App/App";

export const AppRouter: FC = () => {

    const isAuth = true

    return (
        <Routes>
            <Route path='/' element={<App/>}>
                <Route>
                    { isAuth && authRoutes.map(({path, Element}) => <Route key={path} path={path} element={<Element/>}/>)}
                    { publicRoutes.map(({path, Element}) => <Route key={path} path={path} element={<Element/>}/>)}
                </Route>
            </Route>
        </Routes>
    );
};