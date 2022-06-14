import React, {FC} from 'react';
import { Header } from "../Header";
import { Home } from "../../pages/HomePage";

import "../../styles/_index.scss"
import {Layout} from "../Layout";

export const App: FC = () => {
    return (
        <div className="app">
            <Layout>
                <Header />
                <div className="app__content">
                    <Home/>
                </div>
            </Layout>
        </div>
    );
}
