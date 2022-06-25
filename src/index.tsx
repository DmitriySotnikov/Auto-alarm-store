import React from 'react';
import reportWebVitals from './reportWebVitals';
import * as ReactDomClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/store'
import {Provider} from 'react-redux'
import {AppRouter} from "./components/AppRouter";

const root = ReactDomClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();