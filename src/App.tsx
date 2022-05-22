import React, {FC} from 'react';
import './styles/_layout.scss';
import './styles/_container.scss'
import {Header} from "./components/blocks/Header";

export const App: FC = () => {
  return (
    <div className="layout">
        <Header />
        <div className="layout__content">
            <div className="container">
                КОНТЕНТ
            </div>
        </div>
    </div>
  );
}
