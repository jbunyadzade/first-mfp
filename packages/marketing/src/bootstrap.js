import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const mount = (targetRoot) => {
    ReactDOM.render(<App />, targetRoot);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
