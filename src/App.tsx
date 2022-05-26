import React, {FC} from 'react';
import './styles/_layout.scss';
import './styles/_container.scss'
import {Header} from "./components/blocks/Header";
import {Catalog} from "./page/catalog";
import {Breadcrumb} from "./components/simple/Breadcrumb";

export const App: FC = () => {
  return (
    <div className="layout">
        <Header />
        <div className="layout__content">
            <div className="container">
                <Breadcrumb/>
                <Catalog/>
            </div>
        </div>
    </div>
  );
}
