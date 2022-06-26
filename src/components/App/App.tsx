import React, {FC} from 'react';
import "../../styles/_index.scss"
import {Main} from "../Main";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Outlet} from "react-router-dom";
import {MenuCatalog} from "../MenuCatalog";

export const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Main>
                <MenuCatalog />
                <Outlet />
            </Main>
            <Footer />
        </div>
    );
}
