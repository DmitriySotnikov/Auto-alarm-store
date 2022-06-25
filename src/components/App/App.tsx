import React, {FC} from 'react';
import "../../styles/_index.scss"
import {Main} from "../Main";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Outlet} from "react-router-dom";

export const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    );
}
