import React from 'react';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDomClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDomClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes  >
                    <Route path='*' element={<App/>} />
                </Routes >
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

