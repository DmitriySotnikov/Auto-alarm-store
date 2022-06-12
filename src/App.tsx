import React, {FC} from 'react';
import './styles/_layout.scss';
import './styles/_container.scss'
import {Header} from "./components/blocks/Header";
import {Catalog} from "./page/catalog";
import {Breadcrumb} from "./components/simple/Breadcrumb";
import {Home} from "./page/home";

export const App: FC = () => {
  return (
    <div className="layout">
        <Header />
        <div className="layout-content">
            <div className="container">
                <Home/>
            </div>
        </div>
    </div>
  );
}
