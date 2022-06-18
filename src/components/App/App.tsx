import React, {FC} from 'react';
import { Header } from "../Header";
import { Home } from "../../pages/HomePage";

import "../../styles/_index.scss"
import {Layout} from "../Layout";
import {Footer} from "../Footer";

export const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Layout>
                <Home/>
            </Layout>
            <Footer/>
        </div>
    );
}
