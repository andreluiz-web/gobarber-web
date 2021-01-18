/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes/index';

const App: React.FC = () => {
    return (
        <>
            <AppProvider>
                <Router>
                    <Routes />
                </Router>
            </AppProvider>

            <GlobalStyle />
        </>
    );
};

export default App;
