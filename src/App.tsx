import React, {FC} from 'react';
import './styles/_layout.scss';
import './styles/_container.scss'
import {Header} from "./components/blocks/Header";
import {Catalog} from "./page/catalog";

export const App: FC = () => {
  return (
    <div className="layout">
        <Header />
        <div className="layout__content">
            <div className="container">
                <Catalog/>
            </div>
        </div>
    </div>
  );
}
